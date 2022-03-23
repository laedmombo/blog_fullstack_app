package com.example.blog_fullstack_app.service;

import java.util.Optional;

import com.example.blog_fullstack_app.model.Article;
import com.example.blog_fullstack_app.repository.ArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ArticleService {

    @Autowired
    private ArticleRepository articleRepository;

    public Optional<Article> getArticle(final Integer id) {
        return articleRepository.findById(id);
    }

    public Iterable<Article> getArticle() {
        return articleRepository.findAll();
    }

    public void deleteArticle(final Integer id) {
        articleRepository.deleteById(id);
    }

    public Article saveArticle(Article article) {
        Article saveArticle = articleRepository.save(article);
        return saveArticle;
    }


}
