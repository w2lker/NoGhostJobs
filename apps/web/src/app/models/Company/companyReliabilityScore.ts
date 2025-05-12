import { CompanyReadingDTO } from "../CompanyReading";

export const calculateCompanyReliabilityScore = (readings: CompanyReadingDTO[]): number => {
  if (!readings.length) {
    return 0; // No data available, assume company is reliable
  }

  // Sort readings by date to get the most recent one
  const sortedReadings = [...readings].sort((a, b) =>
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  const latestReading = sortedReadings[0];

  // Calculate base score from 0 to 100
  let score = 0;

  // 1. Check ratio of open jobs to employee count (optimal is 4%)
  if (latestReading.employeeCount > 0) {
    const jobsPerEmployee = latestReading.jobsOpen / latestReading.employeeCount;
    const optimalRatio = 0.04; // 4%
    const deviation = Math.abs(jobsPerEmployee - optimalRatio);

    // Calculate score based on deviation from optimal ratio
    // The further from 4%, the higher the score (more unreliable)
    if (deviation > 0) {
      // Convert deviation to score (0-50 points)
      // At 0% deviation (perfect 4%) score is 0
      // At 16% deviation (0% or 20%) score is 50
      score += Math.min(deviation * 312.5, 50); // 50/0.16 = 312.5
    }
  }

  // 2. Check ratio of jobs opened in last 30 days to total open jobs (optimal is 30/38)
  if (latestReading.jobsOpen > 0) {
    const recentJobsRatio = latestReading.jobsOpen30Days / latestReading.jobsOpen;
    const optimalRatio = 30/38; // ~0.789
    const deviation = Math.abs(recentJobsRatio - optimalRatio);

    // Calculate score based on deviation from optimal ratio
    // The further from 30/38, the higher the score
    if (deviation > 0) {
      // Convert deviation to score (0-30 points)
      // At 0 deviation (perfect 30/38) score is 0
      // At 0.789 deviation (0 or 1.578) score is 30
      score += Math.min(deviation * 38, 30); // 30/0.789 ≈ 38
    }
  }

  // 3. Check job posting history volatility (only if we have more than one reading)
  if (sortedReadings.length > 1) {
    const previousReading = sortedReadings[1];
    const jobsChange = Math.abs(latestReading.jobsOpen - previousReading.jobsOpen);
    const volatilityScore = (jobsChange / Math.max(previousReading.jobsOpen, 1)) * 20;
    score += Math.min(volatilityScore, 20); // Up to 20 points for high volatility
  }

  // Normalize score to 100 if we only have one reading
  if (sortedReadings.length === 1) {
    score = (score / 80) * 100; // Convert from 0-80 scale to 0-100 scale
  }

  // Ensure score is between 0 and 100
  return Math.min(Math.max(score, 0), 100);
};
