package com.thecrowstudios.beauty_beat_website;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class WebController {
    @GetMapping("/")
    public static String getIndex() {
        return "index.html";
    }
}
