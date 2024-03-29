import { Box, Fab, Zoom, useScrollTrigger } from "@mui/material"
import { useCallback } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpLong } from "@fortawesome/free-solid-svg-icons"
import { createTheme, ThemeProvider } from '@mui/material/styles';
function BackToTop() {
    // Use `window` instead of `body` as `document` will be `undefined` when the
    // hooks first runs. By default, useScrollTrigger will attach itself to `window`.
    const trigger = useScrollTrigger({
      // Number of pixels needed to scroll to toggle `trigger` to `true`.
      threshold: 100,
    })
    const scrollToTop = useCallback(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, [])
    const theme = createTheme({
      palette: {   
        secondary: { 
          main: '#f73378',
          dark:'#e91e63'
        },
      },
    });
    return (
      <Zoom in={trigger}>
        <Box
          role="presentation"
          // Place the button in the bottom right corner.
          sx={{
            position: "fixed",
            bottom: 32,
            right: 32,
            zIndex: 1,
          }}
        >
           <ThemeProvider theme={theme}>
          <Fab
            onClick={scrollToTop}
            color="secondary"
            size="small"
            aria-label="Scroll back to top"
          >
            <FontAwesomeIcon icon={faUpLong} />
          </Fab>
          </ThemeProvider>
        </Box>
      </Zoom>
    )
  }
  export default BackToTop