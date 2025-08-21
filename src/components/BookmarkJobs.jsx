import React from 'react';
import { useSelector } from 'react-redux';
import Job from './Job';

const BookmarkedJobs = () => {
  const { bookmarkedJobs, allJobs } = useSelector(store => store.job);
  const filteredJobs = allJobs.filter(job => bookmarkedJobs.includes(job._id));
console.log("filter jobs:", filteredJobs);

  return (
    <div className="max-w-7xl mx-auto my-10">
      <h1 className="text-3xl font-bold mb-4">Bookmarked Jobs</h1>
      <div className="grid grid-cols-3 gap-4">
        {filteredJobs.length === 0 ? (
          <p>No bookmarks yet.</p>
        ) : (
          filteredJobs.map(job => <Job key={job._id} job={job} />)
        )}
      </div>
    </div>
  );
};

export default BookmarkedJobs;
