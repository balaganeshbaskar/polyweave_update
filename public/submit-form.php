<?php
// Polyweave Form Handler
// Send form submissions to sourcing@polyweave.net

// Configuration - update these for Hostinger
$to = 'sourcing@polyweave.net';
$subject = 'New inquiry from Polyweave website';

// Honeypot check - if website field is filled, it's a bot
if (!empty($_POST['website'])) {
    http_response_code(400);
    echo 'Bot detected';
    exit;
}

// Validate required fields
$required = ['name', 'company', 'email', 'country', 'product'];
foreach ($required as $field) {
    if (empty($_POST[$field])) {
        http_response_code(400);
        echo "Missing required field: $field";
        exit;
    }
}

// Validate email
if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo 'Invalid email address';
    exit;
}

// Build email content
$message = "New inquiry from Polyweave website\n";
$message .= "=====================================\n\n";
$message .= "Name: " . htmlspecialchars($_POST['name']) . "\n";
$message .= "Company: " . htmlspecialchars($_POST['company']) . "\n";
$message .= "Email: " . htmlspecialchars($_POST['email']) . "\n";
$message .= "Country: " . htmlspecialchars($_POST['country']) . "\n";
$message .= "Product/Requirement: " . htmlspecialchars($_POST['product']) . "\n";

if (!empty($_POST['current-price'])) {
    $message .= "Current Supplier Price: " . htmlspecialchars($_POST['current-price']) . "\n";
}

if (!empty($_POST['message'])) {
    $message .= "Message: " . htmlspecialchars($_POST['message']) . "\n";
}

$message .= "\n---\n";
$message .= "Sent via polyweave.net contact form";

// Email headers
$headers = "From: noreply@polyweave.net\r\n";
$headers .= "Reply-To: " . htmlspecialchars($_POST['email']) . "\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Send email
if (mail($to, $subject, $message, $headers)) {
    http_response_code(200);
    echo 'OK';
} else {
    http_response_code(500);
    echo 'Failed to send email';
}
?>