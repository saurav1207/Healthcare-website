import React, { useState } from 'react';
import '../styles/Article.css'

const Article = () => {
    // Atritcle data
    const articles = [
        {
            id: 1,
            title: "The Power of Protein: Dairy",
            writer: "John Smith",
            imageUrl: "https://source.unsplash.com/150x150/?dairy",
            content: "Dairy foods contain two major forms of protein: whey and casein. Eighty percent of milk's protein content comes from casein and the remaining 20% is whey. Whey is rapidly digested, while casein is digested more slowly, providing a more prolonged entry of amino acids into the bloodstream. When making foods like yogurt or cheese, excess liquid that contains whey protein is strained away, leaving a solid or semi-solid product that may have a higher casein-to-whey proportion compared with milk.\n\nDifferent dairy foods can have different amounts of protein per serving. This is often due to the processing steps used to make each type of product. For example, yogurt varieties like Greek yogurt and Icelandic skyr are typically thicker in texture and higher in protein than traditional yogurt. This difference is due to the fact that they are strained one or two more times than regular yogurt, which removes additional liquid, concentrates the product, and increases the amount of protein found in one serving. Also, low-fat milk may have a slightly higher protein content per serving compared with whole milk since the removal of some fat increases the proportion of protein per serving."
        },
        {
            id: 2,
            title: "Red-Meat Affects Breast Cancer",
            writer: "Sophia Williams",
            imageUrl: "https://source.unsplash.com/150x150/?red-meat",
            content: "The next time you cook dinner, you may want to skip the steak and opt for fresh fish or skinless chicken breast. Why? Research suggests that women who eat a lot of red or processed meats have a higher risk for breast cancer.\n\nOne large 2020 review published in the International Journal of Environmental Research and Public Health linked the two, for example. It also found that diets with little red or processed meat—such as the Mediterranean diet—may be associated with a smaller chance of developing the disease.\nBreast cancer isn’t the only issue associated with red and processed meat consumption. There’s compelling evidence that meat-heavy diets raise a person’s risk for additional health problems like heart disease, Alzheimer’s disease, stroke, type 2 diabetes, and colorectal cancer.\n\nTo lower your risk of these conditions, it’s a smart idea to limit your red meat consumption, especially of items that are high in saturated fat or processed. Instead, focus on other protein sources, like fish, beans, or poultry.\n\nWith that in mind, here are some simple, realistic, and achievable tips to help you cut down on red meat:",
        },
        {
            id: 3,
            title: "Simple Moves to Help Prevent Blood Clots",
            writer: "Michael Davis",
            imageUrl: "https://source.unsplash.com/150x150/?bloodclots",
            content: "If you spend a lot of time sitting, you could be at an increased risk for dangerous blood clots. The term 'e-thrombosis' has been coined to describe the link between a very common phenomenon—sitting at a computer—and blood clots. Thrombosis is the medical term for a blood clot.\n\nA review of studies published in the journal Annals of Translational Medicine in 2018 revealed that sitting at a computer for more than eight hours per day may be associated with a 1.8 times higher risk of blood clots. Increasing that sitting time to more than 10 hours per day may be associated with a 2.8 times higher risk of blood clots.\n\nThe good news is that there are simple moves you can incorporate into your daily life to help prevent dangerous blood clots. If you have a desk job or spend a lot of time sitting at a computer, remember to take a break and move every 30 minutes. You can improve blood flow to your lower legs by flexing and stretching your feet or tightening and releasing your leg muscles while sitting. If you're in a wheelchair or unable to move your legs, try to stretch your hamstrings or leg muscles. You can also consider asking someone to assist you in moving your legs."
        },
        {
            id: 4,
            title: "Woman's Periods: A Natural Cycle",
            writer: "Emily Johnson",
            imageUrl: "https://source.unsplash.com/150x150/?menstruation",
            content: "Menstruation, commonly referred to as a woman's period, is a natural and essential part of a woman's reproductive cycle. It is a monthly occurrence that signifies the shedding of the uterine lining in preparation for a potential pregnancy.\n\nDuring a typical menstrual cycle, which lasts approximately 28 days, hormonal changes occur in a woman's body. These hormonal fluctuations regulate the different phases of the menstrual cycle, including menstruation itself.\n\nMenstruation usually lasts for about 3 to 7 days, although this can vary from woman to woman. The first day of menstruation is considered the beginning of a new menstrual cycle. It is during this time that the body eliminates the unfertilized egg and the excess uterine lining through the vagina.\n\nWhile menstruation is a natural process, it can be accompanied by various physical and emotional symptoms. Common symptoms include abdominal cramps, bloating, breast tenderness, mood swings, and fatigue. These symptoms are often referred to as premenstrual syndrome (PMS) and can vary in severity from woman to woman.\n\nIt is important for women to take care of their health during their menstrual cycle."
        }
        // Add more articles as needed
    ];

    const [selectedArticle, setSelectedArticle] = useState(null);

    const openArticle = (articleId) => {
        const article = articles.find((article) => article.id === articleId);
        setSelectedArticle(article);
    };

    const closeArticle = () => {
        setSelectedArticle(null);
    };
    return (
        <div>
        {/* Article section */}
        <section className="article-section">
          <h2>Healthcare Articles</h2>
          <div className="article-list">
            {articles.map((article) => (
              <div className="article-card" key={article.id}>
                <img src={article.imageUrl} alt={article.title} />
                <div className="article-info">
                  <h3>{article.title.slice(0, 50)}...</h3>
                  <p>By {article.writer}</p>
                </div>
                <button onClick={() => openArticle(article.id)}>Read More</button>
              </div>
            ))}
          </div>
        </section>
      
        {/* Article modal */}
        {selectedArticle && (
          <div className="article-modal">
            <div className="article-modal-content">
              <button className="close-icon" onClick={closeArticle}>
                Close
              </button>
              <div className="modal-header">
                <img src={selectedArticle.imageUrl} alt={selectedArticle.title} />
                <div className="modal-info">
                  <h3 style={{ fontWeight: 'bold' }}>{selectedArticle.title}</h3>
                  <p>By {selectedArticle.writer}</p>
                </div>
              </div>
              <div className="modal-content">{selectedArticle.content}</div>
            </div>
          </div>
        )}
      </div>
      
    );
}

export default Article
