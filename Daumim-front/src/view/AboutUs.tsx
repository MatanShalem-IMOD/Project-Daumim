import { Box, Typography } from "@mui/material";
import styled from "styled-components";

export const AboutUs = () => {
  return (
    <Container>
      <Content>
        <TextSection>
          <Typography variant="h4" gutterBottom>
            ?תמיד רציתם לתרום לקהילה ולהשתתף במאמץ המלחמתי
          </Typography>
          <Typography variant="body1" paragraph>
            באתר זה, תוכלו לתרום ולמסור רהיטים, פרטים לבית, בגדים ועוד לחיילים
            הזקוקים לזה תעלו מודעה על הפריט שתרצו לתרום ותנו לחיילים ליצור קשר
            איתכם
          </Typography>
          <Typography variant="body1" paragraph>
            העמותה דואגת לקשר בין האזרחים הנדיבים שרוצים לתרום לבין החיילים שחסר
            להם משהו. במלחמה הם עזרו למאות חיילים הנזקקים לתמיכה כלכלית. תנו
            חיים חדשים לפריטים שלכם, כך תשמרו על הסביבה ותתרמו לקהילה.
          </Typography>
        </TextSection>
        <ImageSection>
          <img src="../../src/assets/logo.png" alt="About Us" />
        </ImageSection>
      </Content>
    </Container>
  );
};

const Container = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 2rem;
`;

const Content = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
`;

const TextSection = styled(Box)`
  flex: 1;
  padding: 1rem;
`;

const ImageSection = styled(Box)`
  flex: 1;
  padding: 1rem;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }
`;

export default AboutUs;
