// const API_BASE_URL = process.env.REACT_APP_API_URL;

// export const USER_API_END_POINT = "http://localhost:8000/api/v1/user";
// export const JOB_API_END_POINT = "http://localhost:8000/api/v1/job";
// export const APPLICATION_API_END_POINT = "http://localhost:8000/api/v1/application";
// export const COMPANY_API_END_POINT = "http://localhost:8000/api/v1/company";


const API_BASE_URL = process.env.REACT_APP_API_URL;

export const USER_API_END_POINT = `${API_BASE_URL}/user`;
export const JOB_API_END_POINT = `${API_BASE_URL}/job`;
export const APPLICATION_API_END_POINT = `${API_BASE_URL}/application`;
export const COMPANY_API_END_POINT = `${API_BASE_URL}/company`;

git add .
git commit -m "backend commit" 
git remote add origin https://github.com/VaibhavTechWizard/TalentNest_Frontend.git 
git push -u origin main
