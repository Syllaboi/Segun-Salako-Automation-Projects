# 🚀 Amazon Product Review Analysis | Excel Dashboard

**Project Duration**: 2 Weeks  
**Tools**: Excel (Pivot Tables, Power Query, Interactive Dashboards)  
**Dataset**: 1,465 Amazon products (Electronics, Home & Kitchen, Books, Clothing, Sports)  






## 🔍 Analysis Highlights
- **Price Sensitivity**: Products under ¥200 generated 68% of total reviews  
- **Optimal Discounts**: 25-30% discounts drove 35% more revenue than average  
- **Rating Trends**: 4.2+ rated products accounted for 75% of total reviews  

## 📊 Pivot Table Insights
1. **Discount Effectiveness**: Medium discounts (20-40%) performed best in Electronics (+15% revenue)  
2. **Price Buckets**: ¥200-500 range had highest avg rating (4.3 vs 4.0 overall)  
3. **Top Performers**: Identified 18 high-rating products with low visibility  

## 💡 Recommendations
### Pricing Strategy
| **Category**       | **Action**               | **Impact**          |
|--------------------|--------------------------|---------------------|
| Electronics        | 25-30% discounts         | +15% revenue        |
| Home & Kitchen     | Bundle low-rated items   | +22% review volume  |

### Marketing Tactics
- **Target**: "Customer Favorites" (rating ≥4.5 + discount ≥20%)  
- **Promote**: ¥200-500 range during holidays  
- **Clearance**: 8 underperforming products (rating <3)  

## 🛠️ Excel Features
- **Interactive Dashboard** with slicers for category/price filters  
- **Dynamic Formulas**:  
  ```excel
  =IFS([@Price]<200,"Budget",[@Price]<=500,"Mid-Range",TRUE,"Premium")

