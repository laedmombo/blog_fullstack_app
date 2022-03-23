package com.example.blog_fullstack_app.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.blog_fullstack_app.model.Article;

@Repository
public interface ArticleRepository
    extends CrudRepository<Article, Integer> {

}
