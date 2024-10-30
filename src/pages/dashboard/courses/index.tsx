import React, { useEffect, useState } from "react";
import ErrorMessage from "../../../components/ErrorMessage";
import StudentLayout from "../../../components/layouts/StudentLayout";
import { useStore } from "../../../store/store";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Pagination,
  Rating,
  Typography,
} from "@mui/material";
import { PiStudentDuotone } from "react-icons/pi";
import { AiFillStar } from "react-icons/ai";
import useAxios from "../../../hooks/useAxios";
import { useNavigate } from "react-router-dom";

export interface Course {
  id: number;
  title: string;
  description: string;
  rating: number;
  numReviews: number;
  previewImage: string;
  price: number;
  studentCount: number;
}

const StudentCourses = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [courses, setCourses] = useState<Course[]>([]);
  const coursesPerPage = 12;
  const axiosInstance = useAxios();
  const { token } = useStore();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        if (token) {
          const response = await axiosInstance.get(
            "/student/dashboard/courses",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          console.log(response.data);
          setCourses(response.data.data.courses);
        } else {
          navigate("/login");
        }
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, [token]);

  // Get current courses
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = courses.slice(indexOfFirstCourse, indexOfLastCourse);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <StudentLayout>
      <Container>
        <Typography variant="h4" align="center" sx={{ mt: 4 }}>
          Barcha kurslar
        </Typography>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          {courses.length > 0 ? (
            <>
              {currentCourses.map((course: Course) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={course.id}>
                  <Card sx={{ maxWidth: 330, mb: 2 }}>
                    <Box sx={{ position: "relative" }}>
                      <img
                        src={
                          course.previewImage ||
                          "https://via.placeholder.com/330x140"
                        }
                        alt="Course Image"
                        style={{
                          width: "100%",
                          height: 140,
                          objectFit: "cover",
                        }}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: 7,
                          right: 7,
                          bgcolor: "rgba(0, 0, 0, 0.7)",
                          color: "white",
                          padding: "2px 5px",
                          borderRadius: "4px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Typography variant="body2" sx={{ mr: 1 }}>
                          {course.rating || "N/A"}
                        </Typography>
                        <Rating
                          value={course.rating || 0}
                          readOnly
                          precision={0.5}
                          size="small"
                        />
                      </Box>
                    </Box>
                    <Box sx={{ p: 2 }}>
                      <Typography variant="h6">{course.title}</Typography>
                      <Typography variant="body2">
                        {course.description}
                      </Typography>
                      <Box display="flex" alignItems="center" mt={2}>
                        <PiStudentDuotone color="#FFD700" />
                        <Typography variant="body2" sx={{ ml: 1 }}>
                          {course.studentCount || "N/A"} talaba
                        </Typography>
                      </Box>
                      <Box display="flex" alignItems="center" mt={1}>
                        <AiFillStar color="#FFD700" />
                        <Typography variant="body2" sx={{ ml: 1 }}>
                          {course.numReviews || 0} ta izoh
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        p: 2,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: "bold", color: "green" }}
                      >
                        {course.price || "N/A"} so&apos;m
                      </Typography>
                      <Button
                        variant="outlined"
                        size="small"
                        onClick={() => console.log(`Batafsil: ${course.title}`)}
                      >
                        Batafsil
                      </Button>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </>
          ) : (
            <Typography
              variant="body2"
              sx={{
                fontWeight: "bold",
                color: "black",
                alignSelf: "center",
                textAlign: "center",
                mt: 4,
                mb: 4,
              }}
            >
              Hozircha kurslar mavjud emas.
            </Typography>
          )}
        </Grid>
        <Box display="flex" justifyContent="center" mt={2}>
          <Pagination
            count={Math.ceil(courses.length / coursesPerPage)}
            page={currentPage}
            onChange={(event, page) => paginate(page)}
            color="primary"
          />
        </Box>
      </Container>
    </StudentLayout>
  );
};

const AdminCourses = () => {
  return (
    <div>
      <h1>Admin Courses</h1>
    </div>
  );
};

const Courses = () => {
  const { role } = useStore();

  if (role === "student") {
    return <StudentCourses />;
  } else if (role == "admin") {
    return <AdminCourses />;
  }

  return <ErrorMessage message="Xatolik kelib chiqdi shekilli" />;
};

export default Courses;
