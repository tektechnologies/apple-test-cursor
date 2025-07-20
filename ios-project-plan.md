# iOS App Refactoring Plan: OrbitAg Security

## Application Overview
Your React app is a **fleet management/security access control system** with the following key features:
- User authentication (login/signup)
- Dashboard with risk assessment, tasks, alerts
- Map view for location tracking
- Access management with wizard flow
- Vehicle management
- Profile management
- Bottom tab navigation

## Phase 1: Core iOS File Structure & Authentication

### Step 1: Create Xcode Project Foundation
```
OrbitAgSecurity/
├── OrbitAgSecurity.xcodeproj
├── OrbitAgSecurity/
│   ├── App/
│   │   ├── OrbitAgSecurityApp.swift (Main app entry point)
│   │   ├── ContentView.swift (Root view)
│   │   └── AppDelegate.swift (if needed)
│   ├── Authentication/
│   │   ├── Views/
│   │   │   ├── LoginView.swift
│   │   │   ├── SignUpView.swift
│   │   │   └── AuthTabView.swift
│   │   ├── Models/
│   │   │   ├── User.swift
│   │   │   └── AuthState.swift
│   │   ├── ViewModels/
│   │   │   └── AuthViewModel.swift
│   │   └── Services/
│   │       └── AuthService.swift
│   ├── Core/
│   │   ├── Extensions/
│   │   │   ├── Color+Extensions.swift
│   │   │   └── View+Extensions.swift
│   │   ├── Constants/
│   │   │   ├── AppConstants.swift
│   │   │   └── Colors.swift
│   │   └── Utilities/
│   │       └── NetworkManager.swift
│   └── Resources/
│       ├── Assets.xcassets
│       └── Info.plist
```

### Step 2: Authentication Implementation Files

**1. Main App Entry Point:**
- `OrbitAgSecurityApp.swift` - App lifecycle and environment setup
- `ContentView.swift` - Root view with authentication state management

**2. Authentication Views:**
- `LoginView.swift` - Email/password login form
- `SignUpView.swift` - Registration form with email, phone, password
- `AuthTabView.swift` - Tab container for login/signup (similar to your React tabs)

**3. Authentication Models:**
- `User.swift` - User data model
- `AuthState.swift` - Authentication state enum

**4. Authentication ViewModel:**
- `AuthViewModel.swift` - Business logic for login/signup

**5. Authentication Service:**
- `AuthService.swift` - Supabase integration for authentication

## Phase 2: Main App Structure & Navigation

### Step 3: Tab Navigation Setup
```
├── Navigation/
│   ├── MainTabView.swift (Bottom tab navigation)
│   ├── TabBarItems/
│   │   ├── HomeTabView.swift
│   │   ├── MapTabView.swift
│   │   ├── AccessTabView.swift
│   │   └── ProfileTabView.swift
```

### Step 4: Core Views Structure
```
├── Views/
│   ├── Home/
│   │   ├── HomeView.swift
│   │   ├── Components/
│   │   │   ├── RiskBadgeView.swift
│   │   │   ├── DashboardCardView.swift
│   │   │   ├── QuickLinksView.swift
│   │   │   ├── AlertsBannerView.swift
│   │   │   ├── TodaysVisitsView.swift
│   │   │   ├── LatestActivityView.swift
│   │   │   └── ToDoCardView.swift
│   ├── Map/
│   │   ├── MapView.swift
│   │   └── MapKit integration
│   ├── Access/
│   │   ├── AccessView.swift
│   │   └── AccessWizard/
│   │       ├── AccessWizardView.swift
│   │       ├── FacilityStepView.swift
│   │       ├── VehicleStepView.swift
│   │       └── ReviewStepView.swift
│   ├── Profile/
│   │   ├── ProfileView.swift
│   │   └── Components/
│   │       ├── UserInfoView.swift
│   │       └── SettingsView.swift
│   ├── Tasks/
│   │   ├── TasksView.swift
│   │   └── Components/
│   │       ├── TaskListView.swift
│   │       └── TaskDetailView.swift
│   ├── Alerts/
│   │   ├── AlertsView.swift
│   │   └── Components/
│   │       └── AlertListView.swift
│   └── Vehicles/
│       ├── VehicleFormView.swift
│       └── Components/
│           └── VehicleFormComponents.swift
```

## Phase 3: Data Models & Services

### Step 5: Data Layer
```
├── Models/
│   ├── User.swift
│   ├── Task.swift
│   ├── Alert.swift
│   ├── Vehicle.swift
│   ├── Facility.swift
│   ├── Visit.swift
│   └── ActivityEvent.swift

├── ViewModels/
│   ├── HomeViewModel.swift
│   ├── TasksViewModel.swift
│   ├── AlertsViewModel.swift
│   ├── MapViewModel.swift
│   ├── AccessViewModel.swift
│   └── ProfileViewModel.swift

├── Services/
│   ├── SupabaseService.swift
│   ├── LocationService.swift
│   ├── NotificationService.swift
│   └── DataPersistenceService.swift
```

## Implementation Steps (User Journey Focus)

### Step 1: Authentication Flow
1. **Create `OrbitAgSecurityApp.swift`** - App entry point
2. **Create `ContentView.swift`** - Root view with auth state
3. **Create `AuthViewModel.swift`** - Authentication logic
4. **Create `LoginView.swift`** - Login form UI
5. **Create `SignUpView.swift`** - Registration form UI
6. **Create `AuthTabView.swift`** - Tab container for auth
7. **Create `AuthService.swift`** - Supabase integration
8. **Test authentication flow** - Login → Dashboard

### Step 2: Main Navigation
1. **Create `MainTabView.swift`** - Bottom tab navigation
2. **Create basic tab views** - Home, Map, Access, Profile
3. **Implement navigation flow** - Auth → Main tabs

### Step 3: Home Dashboard
1. **Create `HomeView.swift`** - Main dashboard
2. **Create dashboard components** - RiskBadge, QuickLinks, etc.
3. **Create `HomeViewModel.swift`** - Dashboard data logic
4. **Test dashboard functionality**

### Step 4: Additional Features
1. **Map integration** - MapKit setup
2. **Access wizard** - Multi-step form
3. **Tasks management** - CRUD operations
4. **Alerts system** - Notifications
5. **Profile management** - User settings

## Key iOS-Specific Considerations

1. **SwiftUI vs UIKit** - Recommend SwiftUI for modern iOS development
2. **Navigation** - Use `TabView` for bottom navigation, `NavigationView` for stack navigation
3. **State Management** - Use `@StateObject`, `@ObservedObject`, and `@EnvironmentObject`
4. **Data Persistence** - Core Data or UserDefaults for local storage
5. **Networking** - URLSession with Supabase REST API
6. **UI Components** - Custom SwiftUI components to match your design

## Detailed File Breakdown

### Authentication Files (Priority 1)
- `OrbitAgSecurityApp.swift` - Main app entry point with SwiftUI App protocol
- `ContentView.swift` - Root view that handles authentication state
- `AuthViewModel.swift` - ObservableObject for authentication logic
- `LoginView.swift` - Email/password login form with validation
- `SignUpView.swift` - Registration form with email, phone, password fields
- `AuthTabView.swift` - TabView container for login/signup tabs
- `AuthService.swift` - Service class for Supabase authentication calls
- `User.swift` - User data model struct
- `AuthState.swift` - Enum for authentication states (loading, authenticated, unauthenticated)

### Navigation Files (Priority 2)
- `MainTabView.swift` - Bottom tab navigation with 4 main tabs
- `HomeTabView.swift` - Home tab container
- `MapTabView.swift` - Map tab container
- `AccessTabView.swift` - Access tab container
- `ProfileTabView.swift` - Profile tab container

### Core Views (Priority 3)
- `HomeView.swift` - Dashboard with all components
- `MapView.swift` - MapKit integration for location tracking
- `AccessView.swift` - Access management main view
- `ProfileView.swift` - User profile and settings
- `TasksView.swift` - Task management
- `AlertsView.swift` - Alerts and notifications
- `VehicleFormView.swift` - Vehicle registration form

### Dashboard Components (Priority 4)
- `RiskBadgeView.swift` - Risk level indicator
- `DashboardCardView.swift` - Reusable card container
- `QuickLinksView.swift` - Quick access buttons
- `AlertsBannerView.swift` - Alert notifications
- `TodaysVisitsView.swift` - Today's scheduled visits
- `LatestActivityView.swift` - Recent activity feed
- `ToDoCardView.swift` - Task list component

### Access Wizard Components (Priority 5)
- `AccessWizardView.swift` - Multi-step wizard container
- `FacilityStepView.swift` - Facility selection step
- `VehicleStepView.swift` - Vehicle selection step
- `ReviewStepView.swift` - Final review step

### Data Models (Priority 6)
- `Task.swift` - Task data model
- `Alert.swift` - Alert data model
- `Vehicle.swift` - Vehicle data model
- `Facility.swift` - Facility data model
- `Visit.swift` - Visit data model
- `ActivityEvent.swift` - Activity event data model

### ViewModels (Priority 7)
- `HomeViewModel.swift` - Dashboard data and logic
- `TasksViewModel.swift` - Task management logic
- `AlertsViewModel.swift` - Alert management logic
- `MapViewModel.swift` - Map and location logic
- `AccessViewModel.swift` - Access management logic
- `ProfileViewModel.swift` - Profile management logic

### Services (Priority 8)
- `SupabaseService.swift` - Main service for API calls
- `LocationService.swift` - Location and GPS services
- `NotificationService.swift` - Push notification handling
- `DataPersistenceService.swift` - Local data storage

### Utilities & Extensions (Priority 9)
- `Color+Extensions.swift` - Custom color definitions
- `View+Extensions.swift` - SwiftUI view extensions
- `AppConstants.swift` - App-wide constants
- `Colors.swift` - Color scheme definitions
- `NetworkManager.swift` - Network utility functions

## Development Workflow

1. **Start with Authentication** - Get login/signup working first
2. **Add Navigation** - Implement tab navigation
3. **Build Dashboard** - Create home screen with components
4. **Add Core Features** - Map, access, profile views
5. **Implement Data Layer** - Models, ViewModels, Services
6. **Polish & Test** - UI refinements and testing

## Next Steps

1. Create Xcode project with SwiftUI
2. Set up Supabase integration
3. Implement authentication flow
4. Add navigation structure
5. Build dashboard components
6. Add remaining features incrementally 