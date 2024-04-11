    <!-- <?php
    // Check if the request method is POST
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Get form data
        $registrationNo = $_POST["stud_registration_no"];
        $name = $_POST["stud_name"];
        $outlookMail = $_POST["stud_outlook_mail"];
        $password = $_POST["stud_password"];
        $confirmPassword = $_POST["stud_confirm_password"];
        $phoneNo = $_POST["stud_phone_no"];

        // // Create a new XML document or load an existing one
        // $xml = new DOMDocument();
        // if (file_exists('users.xml')) {
        //     $xml->load('users.xml');
        // } else {
        //     $xml->appendChild($xml->createElement('users'));
        // }

        // Create a new user element
        $user = $xml->createElement('user');
        $user->appendChild($xml->createElement('registration_no', $registrationNo));
        $user->appendChild($xml->createElement('name', $name));
        $user->appendChild($xml->createElement('outlook_mail', $outlookMail));
        // Add more elements for other form fields

        // Append the user element to the XML document
        $xml->documentElement->appendChild($user);

        // Save the XML document
        $xml->formatOutput = true;
        $xml->save('users.xml');

        // Respond with a success message
        echo "User registered successfully!";
    } else {
        // Respond with an error message if the request method is not POST
        http_response_code(405);
        echo "Method Not Allowed";
    }
    ?>  -->
