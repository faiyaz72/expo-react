# Dashboard Design - Splitwise Alternative

## Dashboard Layout Overview

The dashboard is the heart of the app - users should feel informed, in control, and able to take quick action. Here's what creates a fulfilling but uncluttered experience:

## 🎯 Top Section - Financial Status (Most Important)

### Net Balance Card (Large, Prominent)
- **Primary Display**: Large number showing net balance
- **Color Coding**: 
  - Green background + "You're owed $X" (positive balance)
  - Red background + "You owe $X" (negative balance)
  - Gray background + "All settled up!" (zero balance)
- **Secondary Info**: Small text showing "across X friends"
- **Action**: Tap to see detailed breakdown

## 📊 Quick Insights Row (3 Cards)

### Card 1: This Month's Spending
- **Value**: "$247.50"
- **Label**: "Spent this month"
- **Visual**: Small trend arrow (↗️ or ↘️)
- **Color**: Neutral blue

### Card 2: Top Category
- **Value**: "Food & Dining"
- **Label**: "Biggest expense"
- **Visual**: Small category icon (🍽️)
- **Color**: Category-themed

### Card 3: Recent Activity
- **Value**: "3 expenses"
- **Label**: "This week"
- **Visual**: Small activity icon (📝)
- **Color**: Neutral green

## 👥 Recent Friends Section

### Section Header
- **Title**: "Recent Friends"
- **Action**: "View All" (tappable, small text)

### Friend Cards (Max 3-4 visible)
Each friend card shows:
- **Avatar**: Initial or default icon
- **Name**: "John D."
- **Balance**: "$23.50" (color-coded: green if owed, red if owing)
- **Last Activity**: "2 days ago"
- **Quick Action**: Swipe right for instant equal split

## 📱 Floating Action Button (FAB)

### Position & Design
- **Location**: Bottom right corner
- **Size**: Large, prominent
- **Icon**: Plus (+) symbol
- **Color**: App primary color
- **Shadow**: Subtle elevation

### Quick Actions (Long Press)
- **Add Expense** (default)
- **Add Friend**
- **Quick Settle** (if balances exist)

## 🔄 Recent Activity Feed

### Section Header
- **Title**: "Recent Activity"
- **Action**: "View All" (tappable)

### Activity Items (Max 5 visible)
Each item shows:
- **Icon**: Category icon (🍽️, 🚗, etc.)
- **Description**: "Split dinner with Sarah"
- **Amount**: "$15.50"
- **Time**: "2 hours ago"
- **Status**: Small dot (green = settled, orange = pending)

## 🎨 Visual Hierarchy

### Information Priority
1. **Net Balance** (largest, most prominent)
2. **Quick Insights** (medium cards)
3. **Recent Friends** (medium cards)
4. **Recent Activity** (smaller list items)

### Spacing & Layout
- **Padding**: Consistent 16px margins
- **Card Spacing**: 12px between cards
- **Section Spacing**: 24px between sections
- **Scroll**: Vertical scroll for overflow content

## 🚀 Quick Actions

### Primary Actions (Always Visible)
- **Add Expense** (FAB)
- **View Insights** (tap on insight cards)
- **Manage Friends** (tap "View All" in friends section)

### Secondary Actions (Contextual)
- **Swipe to Split** (on friend cards)
- **Quick Settle** (on balance card)
- **View Details** (on activity items)

## 📱 Responsive Considerations

### Screen Sizes
- **Small screens**: Show 2-3 friends, 3-4 activities
- **Large screens**: Show 4 friends, 5 activities
- **Landscape**: Adjust card layout to 2 columns

### Loading States
- **Skeleton cards** while data loads
- **Progressive loading** (balance first, then insights, then activity)
- **Pull to refresh** on scroll down

## 🎯 Success Metrics

### User Should Feel
- **Informed**: Know their financial status at a glance
- **In Control**: Easy access to main actions
- **Connected**: See recent activity with friends
- **Motivated**: Clear next steps available

### Key Interactions
- **< 2 seconds**: See net balance
- **< 3 taps**: Add new expense
- **< 1 swipe**: Quick split with friend
- **< 2 taps**: View detailed insights

## 🚫 What NOT to Include (Avoid Clutter)

- Multiple charts or complex graphs
- Too many insight cards (max 3)
- Long lists of friends (show recent only)
- Detailed transaction history (save for activity tab)
- Settings or profile options (move to separate screens)
- Notifications or alerts (use subtle badges instead)
- Search functionality (not needed on dashboard)
- Complex filters or sorting options

## 💡 Pro Tips for Fulfilling Experience

1. **Personalization**: Show user's name in greeting
2. **Contextual Help**: Subtle hints for new users
3. **Achievement Feel**: Celebrate when balances are settled
4. **Smart Defaults**: Remember user preferences
5. **Visual Feedback**: Animate balance changes
6. **Empty States**: Friendly messages when no data exists
