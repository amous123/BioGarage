<?php
  $CONST_SUCCESS			= "<p style=\"color:#00F;\"><strong>Thank you. Your message has been sent.</strong></p>";
  //$CONST_EXPR_EMAIL		= "/[a-zA-Z0-9_-.+]+@[a-zA-Z0-9-]+.[a-zA-Z]+/";
  $CONST_EXPR_EMAIL		= '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
  $CONST_EXPR_NAME		= "/^([a-zA-Z'-]+\s*){2,5}$/";
  $CONST_EXPR_PHONE		= '/^(?:1(?:[. -])?)?(?:\((?=\d{3}\)))?([2-9]\d{2})(?:(?<=\(\d{3})\))? ?(?:(?<=\d{3})[.-])?([2-9]\d{2})[. -]?(\d{4})(?: (?i:ext)\.? ?(\d{1,5}))?$/';
  $CONST_EMAIL_TO			= "myToEmail@abc.com";
  $CONST_EMAIL_SUBJECT	= "Website Contact Form";

  $Name			= trim(stripslashes($_POST['txtName']));
  $Phone			= trim(stripslashes($_POST['txtPhone']));
  $EmailFrom		= trim(stripslashes($_POST['txtEmail']));
  $Message		= trim(stripslashes($_POST['txtMessage']));

  // prepare email body text
  $EmailBody = "";
  $EmailBody .= "Name: ";
  $EmailBody .= $Name;
  $EmailBody .= "\n";
  $EmailBody .= "Phone: ";
  $EmailBody .= $Phone;
  $EmailBody .= "\n";
  $EmailBody .= "Email: ";
  $EmailBody .= $EmailFrom;
  $EmailBody .= "\n";
  $EmailBody .= "Message: ";
  $EmailBody .= $Message;
  $EmailBody .= "\n";

  /*

  function CheckForSpam($fields){
    // $result = checkForSpam(Array($name));
    $spam = false;
    for ($i=0;$i<count($fields);$i++){
      if (eregi("%0A",$fields[$i]) || eregi("%0D",$fields[$i]) || eregi("\r",$fields[$i]) || eregi("\n",$fields[$i])){
        $spam = true;
      }
    }
    return $spam;
  }
  */
?>

<?php

  if (!isset($_POST['txtName'])) {

  //Name
  } elseif ( empty($Name) || !preg_match($CONST_EXPR_NAME,$Name) ) {

    echo "<p style=\"color:#F00;\"><strong>ERROR: Invalid Input for [Name]</strong></p>";

  //EmailFrom
  } elseif ( empty($EmailFrom) || !preg_match($CONST_EXPR_EMAIL,$EmailFrom) ) {

    echo "<p style=\"color:#F00;\"><strong>ERROR: Invalid Input for [Email]</strong></p>";

  //Message
  } elseif ( empty($Message) ) {

    echo "<p style=\"color:#F00;\"><strong>ERROR: Invalid Input for [Message]</strong></p>";

  //All Fields Have Valid Input
  } else {

    // Stop the form being used from an external URL
    // Get the referring URL
    $referer = $_SERVER['HTTP_REFERER'];
    // Get the URL of this page
    $this_url = "http://".$_SERVER['HTTP_HOST'].$_SERVER["REQUEST_URI"];
    // If the referring URL and the URL of this page don't match then
    // display a message and don't send the email.
    if ($referer != $this_url) {
      echo "You do not have permission to use this script from another URL, nice hacking attempt moron.";
      exit;
    }

    // The URLs matched so send the email
    $success = mail($CONST_EMAIL_TO, $CONST_EMAIL_SUBJECT, $EmailBody, "From: <$EmailFrom>");
    //mail($your_email, $subject, $Body, "From: $name <$emailfrom>");
    //echo $EmailBody;
    // redirect to success page
    if ($success) {
      echo $CONST_SUCCESS;
      //print "<meta http-equiv=\"refresh\" content=\"0;URL=".$this_url."\">";
    } else {
      echo "ERROR: Unable to send email!";
      //print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
    }


  }
?>
