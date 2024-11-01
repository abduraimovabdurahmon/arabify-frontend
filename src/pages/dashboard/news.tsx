import React from 'react';
import StudentLayout from '../../components/layouts/StudentLayout';
import { Container, Typography, Box } from '@mui/material';

// Sample news data
const newsArticles = [
  {
    id: 1,
    message: "🚨 Major Event Unfolds in City: Authorities respond to a significant incident.",
  },
  {
    id: 2,
    message: "🌍 Community Initiatives Drive Local Engagement: Events aimed at enhancing community ties.",
  },
  {
    id: 3,
    message: "💡 Technological Advances Reshape Industry Standards: Innovations poised to revolutionize sectors.",
  },
  {
    id: 4,
    message: "☔ Weather Warning Issued for Upcoming Storm: Prepare for severe weather conditions this week.",
  },
];

const News = () => {
  return (
    <StudentLayout>
      <Container maxWidth="lg">
        <Typography variant="h4" gutterBottom align="center">
          Notifications
        </Typography>
        <Box sx={{ marginTop: 2 }}>
          {newsArticles.map(article => (
            <Box
              key={article.id}
              sx={{
                padding: 2,
                borderRadius: 1,
                marginBottom: 2,
                boxShadow: 1,
              }}
            >
              <Typography variant="body1">
                {article.message}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </StudentLayout>
  );
}

export default News;
