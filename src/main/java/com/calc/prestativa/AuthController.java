package com.calc.prestativa;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class AuthController {

    @GetMapping("/")
    public String showLoginPage() {
        return "index";
    }

    @PostMapping("/register")
    public String registerUser(@RequestParam String username, @RequestParam String password) {
        return "redirect:/";
    }

    @PostMapping("/login")
    public String loginUser(@RequestParam String loginUsername, @RequestParam String loginPassword) {

        return "redirect:/";
    }
}
