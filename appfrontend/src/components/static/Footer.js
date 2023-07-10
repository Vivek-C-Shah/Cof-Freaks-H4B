import React from "react"; 

import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

import "../../css/Footer.css"; 
 
/**
 * Footer component. Present in every page when user is an authenticated one.
 * 
 * @author syuki
 */
export default function Footer({isAuthenticated}) {
    if(!isAuthenticated){
        return null;
    } else {
        return(
            <div>
                <center>
                    <footer>
                        <Container maxWidth="sm" > 
                            <Typography variant="body1" style={{ fontSize: 13}}> 
                            <div className="AppFooter">
                                {/* social media */}
                                <Grid container justifyContent="center">
                                    <Grid item xs={2}>
                                        <Link className="FooterLink" href="https://github.com/Vivek-C-Shah/" target="_blank" >{" "}<GitHubIcon /></Link>
                                    </Grid>
                                    <Grid item xs={1}> 
                                        <Link className="FooterLink" href="https://twitter.com/ShVivek25" target="_blank" >{" "}<TwitterIcon /></Link>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Link className="FooterLink" href="https://www.linkedin.com/in/vivek-shah-b65507231/" target="_blank">{"   "}
                                            <LinkedInIcon />
                                        </Link>
                                    </Grid>
                                </Grid>
                                <br/>
                                Powered by <Link className="ModalLink" href="https://polygon.technology/" target="_blank" >Flow</Link>&copy; {new Date().getFullYear()} 
                                </div>
                            </Typography> 
                        </Container>
                    </footer>
                </center>
            </div>
        );
    } 
};
