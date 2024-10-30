import React from "react";
import { useStore } from "../../store/store";
import { Box, Button, Card, Container, Grid, Rating, Typography, useMediaQuery, useTheme } from "@mui/material";
import ErrorMessage from "../../components/ErrorMessage";
import StudentLayout from "../../components/layouts/StudentLayout";
import { PiStudentDuotone } from "react-icons/pi";
import { AiFillStar } from "react-icons/ai";



const courses = [
  {
    id: 1,
    title: "To&apos;liq arab tili kursi",
    description: "Arab tilini asosiydan yuqori darajagacha o&apos;rganing.",
    rating: 4.5,
    numReviews: 150,
    imageUrl: "https://i.ytimg.com/vi/GhgliOg9p3I/hqdefault.jpg",
    price: "75000",
    studentCount: 1000,
  },
  {
    id: 2,
    title: "Murakkab arab yozuvi",
    description: "Keng qamrovli texnikalar bilan arab tilida yozish.",
    rating: 4.8,
    numReviews: 90,
    imageUrl: "https://i.ytimg.com/vi/GhgliOg9p3I/hqdefault.jpg",
    price: "50000",
    studentCount: 1000,
  },
  {
    id: 3,
    title: "Arab tili grammatikasi",
    description: "Arab tilining asosiy qoidalarini o&apos;rganing.",
    rating: 4.6,
    numReviews: 120,
    imageUrl: "https://i.ytimg.com/vi/GhgliOg9p3I/hqdefault.jpg",
    price: "39000",
    studentCount: 1000,
  },
  {
    id: 4,
    title: "Arab tili lug&apos;ati",
    description: "Arab tilining lug&apos;atini o&apos;rganing.",
    rating: 4.7,
    numReviews: 100,
    imageUrl: "https://i.ytimg.com/vi/GhgliOg9p3I/hqdefault.jpg",
    price: "99000",
    studentCount: 1000,
  },
];


const StudentDashboard = () => {
  return (
    <StudentLayout>
      <Container>
        <Typography
          variant="h2"
          align="center"
          sx={{
            background: "linear-gradient(45deg, #3f51b5 -20%, #f50057 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            mt: 4,
            typography: { xs: "h4", sm: "h2" }
          }}
        >
          Nima uchun Arabify.uz bilan birga o&apos;rganish kerak?
        </Typography>
        <Box my={2}>
          <Typography
            variant="body1"
            align="center"
          >
            Barcha darajalar uchun mo&apos;ljallangan maxsus kurslar bilan arab
            tili sirlarini oching. Ehtiyojlaringizga moslashtirilgan noyob
            o&apos;rganish sayohatini boshdan kechiring.
          </Typography>
        </Box>

        <Typography
          variant="h3"
          align="center"
          sx={{
            background: "linear-gradient(45deg, #3f51b5 -20%, #f50057 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            mb: 4,
          }}
        >
          Mashxur kurslarimiz
        </Typography>
        <Grid container spacing={2}>
          {courses.map((course) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={course.id}>
              <Card sx={{ maxWidth: 330, mb: 2 }}>
                <Box sx={{ position: "relative" }}>
                  <img
                    src={course.imageUrl}
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
                      {course.rating}
                    </Typography>
                    <Rating
                      value={course.rating}
                      readOnly
                      precision={0.5}
                      size="small"
                    />
                  </Box>
                </Box>
                <Box sx={{ p: 2 }}>
                  <Typography variant="h6">{course.title}</Typography>
                  <Typography variant="body2">{course.description}</Typography>
                  <Box display="flex" alignItems="center" mt={2}>
                    <PiStudentDuotone color="#FFD700" />
                    <Typography variant="body2" sx={{ ml: 1 }}>
                      {course.studentCount} talaba
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center" mt={1}>
                    <AiFillStar color="#FFD700" />
                    <Typography variant="body2" sx={{ ml: 1 }}>
                      {course.numReviews} ta izoh
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
                    {course.price} so&apos;m
                  </Typography>
                  <Button variant="outlined" size="small">
                    Batafsil
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
          <Grid item xs={12}>
            <Box textAlign="center" my={3}>
              <Button variant="contained" size="large">
                Barcha kurslarni ko&apos;rish
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Box my={4} />
        <Typography
          variant={useMediaQuery(useTheme().breakpoints.down('sm')) ? "h5" : "h3"}
          align="center"
          sx={{
            background: "linear-gradient(45deg, #3f51b5 -20%, #f50057 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            mb: 2,
          }}
        >
          O&apos;quvchilarning fikrlari
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {Array.from({ length: 4 }).map((_, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Box
                sx={{
                  maxWidth: 330,
                  boxShadow: 2,
                  padding: 2,
                  borderRadius: 1,
                  textAlign: "center",
                }}
              >
                <Typography variant="body2" sx={{ lineHeight: 1.5 }}>
                  O&apos;qituvchilar juda yaxshi, kurslar juda qulay va foydali.
                  O&apos;rganishga qiziqarli bo&apos;lib qolganman.
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ mt: 2, fontWeight: "bold" }}
                >
                  - Jamshid Bekmuradov
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </StudentLayout>
  );
};



const AdminDashboard = () => {
  return <h1>Admin Dashboard</h1>;
};

const Dashboard = () => {
  const { role } = useStore();

  if (role === "student") {
    return <StudentDashboard />;
  } else if (role == "admin") {
    return <AdminDashboard />;
  }

  return <ErrorMessage message="Xatolik kelib chiqdi shekilli" />;
};

export default Dashboard;
