import React, { useState, useEffect } from "react";
import StudentLayout from "../../components/layouts/StudentLayout";
import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Snackbar,
} from "@mui/material";
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';

// Language options for translation
const languages = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Spanish' },
  { code: 'fr', name: 'French' },
  { code: 'de', name: 'German' },
  { code: 'zh', name: 'Chinese (Simplified)' },
  { code: 'zh-TW', name: 'Chinese (Traditional)' },
  { code: 'ru', name: 'Russian' },
  { code: 'ja', name: 'Japanese' },
  { code: 'ko', name: 'Korean' },
  { code: 'it', name: 'Italian' },
  { code: 'pt', name: 'Portuguese' },
  { code: 'ar', name: 'Arabic' },
  { code: 'hi', name: 'Hindi' },
  { code: 'bn', name: 'Bengali' },
  { code: 'tr', name: 'Turkish' },
  { code: 'pl', name: 'Polish' },
  { code: 'nl', name: 'Dutch' },
  { code: 'sv', name: 'Swedish' },
  { code: 'no', name: 'Norwegian' },
  { code: 'da', name: 'Danish' },
  { code: 'fi', name: 'Finnish' },
  { code: 'th', name: 'Thai' },
  { code: 'vi', name: 'Vietnamese' },
  { code: 'he', name: 'Hebrew' },
  { code: 'hu', name: 'Hungarian' },
  { code: 'cs', name: 'Czech' },
  { code: 'ro', name: 'Romanian' },
  { code: 'sk', name: 'Slovak' },
  { code: 'bg', name: 'Bulgarian' },
  { code: 'lt', name: 'Lithuanian' },
  { code: 'lv', name: 'Latvian' },
  { code: 'sl', name: 'Slovenian' },
  { code: 'is', name: 'Icelandic' },
  { code: 'ml', name: 'Malayalam' },
  { code: 'ta', name: 'Tamil' },
  { code: 'te', name: 'Telugu' },
  { code: 'kn', name: 'Kannada' },
  { code: 'mr', name: 'Marathi' },
  { code: 'sw', name: 'Swahili' },
  { code: 'fa', name: 'Persian' },
  { code: 'uz', name: 'Uzbek' },
  { code: 'hy', name: 'Armenian' },
  { code: 'km', name: 'Khmer' },
  { code: 'lo', name: 'Lao' },
  { code: 'ne', name: 'Nepali' },
  { code: 'tk', name: 'Turkmen' },
  { code: 'ps', name: 'Pashto' },
  { code: 'sd', name: 'Sindhi' },
  { code: 'am', name: 'Amharic' },
  { code: 'bs', name: 'Bosnian' },
  { code: 'hr', name: 'Croatian' },
  { code: 'sr', name: 'Serbian' },
  { code: 'mk', name: 'Macedonian' },
  { code: 'sl', name: 'Slovenian' },
  { code: 'sw', name: 'Swahili' },
  { code: 'zu', name: 'Zulu' },
  { code: 'xh', name: 'Xhosa' },
  { code: 'tl', name: 'Tagalog' },
  { code: 'ceb', name: 'Cebuano' },
  { code: 'jw', name: 'Javanese' },
  { code: 'su', name: 'Sundanese' },
  { code: 'yi', name: 'Yiddish' },
  { code: 'ba', name: 'Bashkir' },
  { code: 'tt', name: 'Tatar' },
  { code: 'eu', name: 'Basque' },
  { code: 'cy', name: 'Welsh' },
  { code: 'ga', name: 'Irish' },
  { code: 'sc', name: 'Sardinian' },
  { code: 'gv', name: 'Manx' },
  { code: 'ht', name: 'Haitian Creole' },
  { code: 'kl', name: 'Kalaallisut' },
  { code: 'mn', name: 'Mongolian' },
  { code: 'ne', name: 'Nepali' },
  { code: 'or', name: 'Odia' },
  { code: 'si', name: 'Sinhala' },
  { code: 'sn', name: 'Shona' },
  { code: 'so', name: 'Somali' },
  { code: 'tk', name: 'Turkmen' },
  { code: 'tt', name: 'Tatar' },
  { code: 'ug', name: 'Uighur' },
  { code: 'wo', name: 'Wolof' },
  { code: 'my', name: 'Burmese' },
  { code: 'jv', name: 'Javanese' },
  { code: 'lv', name: 'Latvian' },
  { code: 'tl', name: 'Tagalog' },
  { code: 'vi', name: 'Vietnamese' },
  { code: 'ro', name: 'Romanian' },
  { code: 'sq', name: 'Albanian' },
  { code: 'ka', name: 'Georgian' },
  { code: 'xh', name: 'Xhosa' },
  { code: 'qu', name: 'Quechua' },
  { code: 'ay', name: 'Aymara' },
  { code: 'ti', name: 'Tigrinya' },
  { code: 'zu', name: 'Zulu' },
  { code: 'sm', name: 'Samoan' },
  { code: 'fj', name: 'Fijian' },
  { code: 'na', name: 'Nauru' },
  { code: 'vu', name: 'Bislama' },
  { code: 'to', name: 'Tongan' },
  { code: 'ki', name: 'Kikuyu' },
  { code: 'mi', name: 'Māori' },
];

// Function to perform the translation
async function translate(text:string, from:string, to:string) {
  try {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${from}&tl=${to}&dt=t&q=${encodeURI(text)}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Translation failed");
    }

    const json = await response.json();

    if (Array.isArray(json) && Array.isArray(json[0]) && Array.isArray(json[0][0])) {
      const translated = json[0].map((item) => item[0]).join("");
      return translated;
    } else {
      throw new Error("Unexpected response format from Translation API");
    }
  } catch (error) {
    console.error("Translation error: ", error);
    return "";
  }
}

const Translate = () => {
  const [sourceText, setSourceText] = useState("");
  const [targetLanguage, setTargetLanguage] = useState("ar");
  const [translatedText, setTranslatedText] = useState("");
  const [sourceLanguage, setSourceLanguage] = useState("uz");
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  useEffect(() => {
    const performTranslation = async () => {
      if (sourceText) {
        const translation = await translate(sourceText, sourceLanguage, targetLanguage);
        setTranslatedText(translation);
      } else {
        setTranslatedText("");
      }
    };

    performTranslation();
  }, [sourceText, sourceLanguage, targetLanguage]);

  const handleClear = () => {
    setSourceText("");
    setTranslatedText("");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(translatedText);
    setSnackbarOpen(true);
    setTimeout(() => setSnackbarOpen(false), 1000); // Close snackbar after 1 second
  };

  const handleSwap = () => {
    const tempLang = sourceLanguage;
    setSourceLanguage(targetLanguage);
    setTargetLanguage(tempLang);
    setSourceText(translatedText); // Update source text with the translated text
    setTranslatedText(""); // Clear the translated text
  };

  return (
    <StudentLayout>
      <Container maxWidth="md" sx={{ mt: 5 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Tarjimon
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <FormControl fullWidth sx={{ mr: 1 }}>
            <Select
              value={sourceLanguage}
              onChange={(e) => setSourceLanguage(e.target.value)}
              variant="outlined"
            >
              {languages.map((lang) => (
                <MenuItem key={lang.code} value={lang.code}>
                  {lang.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Button
            onClick={handleSwap}
            sx={{ mx: 1 }}
            variant="outlined"
          >
            <SwapHorizIcon />
          </Button>

          <FormControl fullWidth sx={{ ml: 1 }}>
            <Select
              value={targetLanguage}
              onChange={(e) => setTargetLanguage(e.target.value)}
              variant="outlined"
            >
              {languages.map((lang) => (
                <MenuItem key={lang.code} value={lang.code}>
                  {lang.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Box sx={{ display: 'flex', mb: 2 }}>
          <TextField
            label="Matnni kiriting"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            value={sourceText}
            onChange={(e) => setSourceText(e.target.value)}
            sx={{ flex: 1, mr: 1 }}
          />
          <TextField
            label="Tarjimasi"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            value={translatedText}
            sx={{ flex: 1, ml: 1 }}
            InputProps={{
              readOnly: true,
            }}
          />
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            onClick={handleClear}
            variant="outlined"
            sx={{ mr: 1 }}
          >
            Tozalash
          </Button>
          <Button
            onClick={handleCopy}
            variant="contained"
          >
            Nusxa olish
          </Button>
        </Box>

        <Snackbar
          open={snackbarOpen}
          message="Nusxa olindi!"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          autoHideDuration={1000}
          onClose={() => setSnackbarOpen(false)}
        />
      </Container>
    </StudentLayout>
  );
};

export default Translate;
