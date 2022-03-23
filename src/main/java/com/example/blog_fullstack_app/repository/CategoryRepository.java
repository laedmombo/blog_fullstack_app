package com.example.blog_fullstack_app.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.blog_fullstack_app.model.Category;


@Repository
public interface CategoryRepository extends CrudRepository<Category, Integer> {

}
