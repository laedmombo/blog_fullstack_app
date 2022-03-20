DROP TABLE IF EXISTS articles;
DROP TABLE IF EXISTS categories;

CREATE TABLE articles (
                          id INT AUTO_INCREMENT  PRIMARY KEY,
                          author_name VARCHAR(250) NOT NULL,
                          content VARCHAR(250) NOT NULL,
                          date DATE
);
INSERT INTO articles (author_name, content, date) VALUES
                                                      ('Dael mombo', 'Un ordinateur quantique', '1971-12-17'),
                                                      ('Dael mombo', ' Lionel Messi', '1726-04-26'),
                                                      ('Dael mombo', ' FC Barcelone ', '1726-04-26');
CREATE TABLE categories (
                            category_id INT AUTO_INCREMENT  PRIMARY KEY,
                            name VARCHAR(250) NOT NULL
);
INSERT INTO categories (name) VALUES
                                  ('Scientifique'),
                                  ('Poeple'),
                                  ('Santé'),
                                  ('Sport');
CREATE TABLE category_article (
                                  category_id INT NOT NULL,
                                  article_id INT NOT NULL
);
INSERT INTO category_article (category_id, article_id) VALUES
                                                           (1,1),
                                                           (2,2),
                                                           (3,3),
                                                           (4,1),
                                                           (4,2),
                                                           (4,3);
