<?php

    function sendNotification($to, $title, $message)
    {
        $msg = $message;
        $content = array(
            "en" => $msg
        );
        $headings = array(
            "en" => $title
        );

        $fields = array(
            'app_id' => 'APP_KEY',
            "headings" => $headings,
            'include_player_ids' => array($to),
            'content_available' => true,
            'contents' => $content
        );

        $headers = array(
            'Authorization: key=REST_API_KEY',
            'Content-Type: application/json; charset=utf-8'
        );
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, 'https://onesignal.com/api/v1/notifications');
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($fields));
        $result = curl_exec($ch);
        curl_close($ch);
        return $result;
    }
    sendNotification("","","");
?>