import React, { useState } from "react";
import {
  Box,
  Button,
  Menu,
  MenuItem,
  Typography,
  IconButton,
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import { useTranslation } from "react-i18next";

const LANGUAGES = [
  { code: "en", name: "EN" },
  { code: "fr", name: "FR" },
  { code: "de", name: "DE" },
];

const LanguageButton = () => {
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language); // Set initial language from i18n

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (languageCode) => {
    i18n.changeLanguage(languageCode); // Change language using i18next
    setCurrentLanguage(languageCode); // Update the current language in state
    handleClose(); // Close the menu after selection
  };

  return (
    <Box sx={{ marginX: 1 }}>
      <Button
        startIcon={<LanguageIcon />}
        onClick={handleClick}
        sx={{
          color: "white",
          fontSize: "18px",
          display: { xs: "none", md: "block" },
        }}
      >
        {LANGUAGES.find((lang) => lang.code === currentLanguage)?.name}
      </Button>

      <IconButton
        sx={{
          fontSize: "24px",
          color: "white",
          display: { xs: "block", md: "none" },
        }}
        onClick={handleClick}
      >
        <LanguageIcon />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "language-button",
        }}
      >
        {LANGUAGES.map((language) => (
          <MenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
          >
            <Typography>{language.name}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default LanguageButton;
