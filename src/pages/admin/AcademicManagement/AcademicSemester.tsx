import { useGetAllSemestersQuery } from "../../../redux/features/admin/AcademicManagementApi";

const AcademicSemester = () => {
  const { data } = useGetAllSemestersQuery(undefined);
  console.log(data);
  return (
    <div>
      <p>this is academic semester page </p>
    </div>
  );
};

export default AcademicSemester;
