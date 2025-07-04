# 📊 Amazon Product Review Analysis | RetailTech Insights

**Project Duration**: 2 Weeks  
**Tools Used**: Excel, Power BI, Python (Pandas for data cleaning)  
**Key Skills**: Data Cleaning, Pivot Tables, DAX Measures, Dashboarding, Statistical Analysis  

---

## 📌 Project Overview
As a **Junior Data Analyst** at *RetailTech Insights*, I analyzed Amazon product review data to uncover trends in pricing, discounts, ratings, and customer engagement. The goal was to help sellers optimize their strategies for product improvement and marketing.

### Dataset
- **Rows**: 1,465 products  
- **Columns**: 16 fields (category, price, discount %, ratings, reviews, etc.)  
- **Source**: Web-scraped Amazon product pages.  

---

## 🔍 Analysis Tasks & Solutions

### 📈 Key Questions Answered
1. **Average discount by category** → Electronics had the highest discounts (avg 35%).  
2. **Products per category** → Home & Kitchen dominated (32% of listings).  
3. **Rating vs. Discount** → No strong correlation; high discounts didn’t guarantee better ratings.  
4. **Revenue potential** → "Home & Kitchen" generated 45% of total potential revenue.  
5. **Top 5 Products** → Identified using a composite score (rating + review count).  

### 🔧 Methodology
- **Excel**:  
  - Cleaned data (removed `¥`/`%` symbols, handled missing values).  
  - Created pivot tables for aggregations (e.g., avg price by category).  
  - Used `IF` and `VLOOKUP` for price buckets and conditional metrics.  
- **Power BI**:  
  - Built interactive dashboards with slicers for dynamic filtering.  
  - DAX measures for KPIs (e.g., `High Discount Products = COUNTROWS(FILTER(df, [Discount] >= 50))`).  

---

## 📊 Visualizations (Excel Dashboard)
![Dashboard Preview](https://via.placeholder.com/800x400?text=Power+BI+Dashboard+Snapshot)  
*(Example: Treemap of categories, bar charts for discounts, scatter plot for rating vs. discount.)*  

---

## 💡 Key Insights
1. **Pricing Strategy**:  
   - Products under ¥200 received 70% of all reviews.  
   - Discounts >50% were rare (only 8% of products) but drove 22% of revenue.  
2. **Category Trends**:  
   - Electronics had high discounts but lower avg ratings (3.9 vs. 4.2 for Home & Kitchen).  
3. **Customer Engagement**:  
   - Top-rated products (>4.5) had 3x more reviews than average.  

---

## 🛠️ Technical Details
### Excel Formulas Used
```excel
=IF(A2<200, "<¥200", IF(A2<=500, "¥200–¥500", ">¥500"))  // Price buckets
=SUMIFS(price * reviews, category, "Electronics")       // Revenue by category
