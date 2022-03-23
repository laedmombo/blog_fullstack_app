package com.example.blog_fullstack_app.controller;

    import java.util.List;

    import org.springframework.beans.factory.annotation.Autowired;
    import org.springframework.web.bind.annotation.CrossOrigin;
    import org.springframework.web.bind.annotation.GetMapping;
    import org.springframework.web.bind.annotation.PathVariable;
    import org.springframework.web.bind.annotation.PostMapping;
    import org.springframework.web.bind.annotation.RequestMapping;
    import org.springframework.web.bind.annotation.RestController;

    import com.example.blog_fullstack_app.model.Category;
    import com.example.blog_fullstack_app.model.Article;
    import com.example.blog_fullstack_app.service.CategoryService;
    import com.example.blog_fullstack_app.service.ArticleService;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("blog_fullstack_app/private/category")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @Autowired
    private ArticleService articleService;

    @PostMapping("/{idCategory}/{idArticle}")
    public void addProductToCategory(
        @PathVariable(name = "idCategory") Integer idCategory,
        @PathVariable(name = "idArticle") Integer idArticle) {

        Category category = categoryService.getEntityCategory(idCategory).get();
        Article article = articleService.getEntityArticle(idArticle).get();

        category.addArticle(article);

        categoryService.saveCategory(category);

    }
}
