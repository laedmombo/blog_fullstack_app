package com.example.blog_fullstack_app.service;

import com.example.blog_fullstack_app.model.Category;
import com.example.blog_fullstack_app.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    public Optional<Category> getCategory(final Integer id) {
        return categoryRepository.findById(id);
    }

    public Iterable<Category> getCategory() {
        return categoryRepository.findAll();
    }

    public void deleteCategory(final Integer id) {
        categoryRepository.deleteById(id);
    }

    public Category saveCategory(Category category) {
        return categoryRepository.save(category);
    }
}
