using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CandidateTracker.Data
{
    public class CandidateTrackerRepository
    {
        private string _connectionString;
        public CandidateTrackerRepository(string connectionString)
        {
            _connectionString = connectionString;
        }
        public int GetRefusedCount()
        {
            using var context = new CandidateTrackerDataContext(_connectionString);
            return context.Candidates.Where(c => c.RegistrationStatus==RegistrationStatus.Refused).Count();
                
        }
        public int GetConfirmedCount()
        {
            using var context = new CandidateTrackerDataContext(_connectionString);
            return context.Candidates.Where(c => c.RegistrationStatus == RegistrationStatus.Confirmed).Count();
        }
        public int GetPendingCount()
        {
            using var context = new CandidateTrackerDataContext(_connectionString);
            return context.Candidates.Where(c => c.RegistrationStatus == RegistrationStatus.Pending).Count();
        }
        public void AddCandidate(Candidate candidate)
        {
            using var context = new CandidateTrackerDataContext(_connectionString);
            candidate.RegistrationStatus = RegistrationStatus.Pending;
            context.Add(candidate);
            context.SaveChanges();
        }
        public List<Candidate> GetConfirmedCandidates()
        {
            using var context = new CandidateTrackerDataContext(_connectionString);
            return context.Candidates.Where(c => c.RegistrationStatus == RegistrationStatus.Confirmed).ToList();
        }
        public List<Candidate> GetRefusedCandidates()
        {
            using var context = new CandidateTrackerDataContext(_connectionString);
            return context.Candidates.Where(c => c.RegistrationStatus == RegistrationStatus.Refused).ToList();
        }
        public List<Candidate> GetPendingCandidates()
        {
            using var context = new CandidateTrackerDataContext(_connectionString);
            return context.Candidates.Where(c => c.RegistrationStatus == RegistrationStatus.Pending).ToList();
        }
        public Candidate GetCandidate(int id)
        {
            using var context = new CandidateTrackerDataContext(_connectionString);
            return context.Candidates.FirstOrDefault(c => c.Id==id);
        }
        public void UpdateCandidate(Candidate candidate)
        {
            using var context = new CandidateTrackerDataContext(_connectionString);
            context.Candidates.Update(candidate);
            context.SaveChanges();
        }
        



    }
}
