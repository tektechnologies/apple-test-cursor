# iOS Development Setup for Cursor

This guide will help you set up Cursor for iOS development with all the necessary extensions and configurations.

## Prerequisites

- macOS with Xcode installed
- Cursor editor
- iOS Simulator (comes with Xcode)

## Required Extensions

### Core iOS Development Extensions

1. **Swift Language Support**
   - Extension ID: `sswg.swift-lang`
   - Provides Swift syntax highlighting, IntelliSense, and code completion

2. **Apple Swift Format**
   - Extension ID: `vknabel.vscode-apple-swift-format`
   - Automatic Swift code formatting using Apple's swift-format tool

3. **CodeLLDB**
   - Extension ID: `vadimcn.vscode-lldb`
   - Debugging support for Swift and C/C++

4. **iOS Debug**
   - Extension ID: `ms-vscode.vscode-ios-debug`
   - iOS simulator and device debugging

### Productivity Extensions

5. **GitLens**
   - Extension ID: `eamodio.gitlens`
   - Enhanced Git integration with blame, history, and more

6. **Git Graph**
   - Extension ID: `mhutchie.git-graph`
   - Visual Git history and branching

7. **GitHub Copilot**
   - Extension ID: `ms-vscode.vscode-github-copilot`
   - AI-powered code completion

8. **GitHub Copilot Chat**
   - Extension ID: `ms-vscode.vscode-github-copilot-chat`
   - AI-powered coding assistance

### Code Quality Extensions

9. **Prettier**
   - Extension ID: `esbenp.prettier-vscode`
   - Code formatting for JavaScript, TypeScript, and more

10. **ESLint**
    - Extension ID: `ms-vscode.vscode-eslint`
    - JavaScript/TypeScript linting

11. **Tailwind CSS IntelliSense**
    - Extension ID: `bradlc.vscode-tailwindcss`
    - Tailwind CSS autocomplete and syntax highlighting

### UI and Navigation Extensions

12. **Material Icon Theme**
    - Extension ID: `pkief.material-icon-theme`
    - Beautiful file and folder icons

13. **Auto Rename Tag**
    - Extension ID: `formulahendry.auto-rename-tag`
    - Useful for SwiftUI development

14. **Bracket Pair Colorizer**
    - Extension ID: `coenraads.bracket-pair-colorizer-2`
    - Color-coded bracket pairs

15. **Path Intellisense**
    - Extension ID: `christian-kohler.path-intellisense`
    - Autocomplete for file paths

## Installation Steps

### 1. Install Extensions

Open Cursor and install the recommended extensions:

1. Press `Cmd+Shift+X` to open the Extensions panel
2. Search for each extension by name or ID
3. Click "Install" for each extension

### 2. Install Swift Format (Optional but Recommended)

```bash
# Install swift-format for code formatting
brew install swift-format
```

### 3. Install CocoaPods (if using CocoaPods)

```bash
# Install CocoaPods for dependency management
sudo gem install cocoapods
```

### 4. Install Swift Package Manager Dependencies

```bash
# Navigate to your iOS project directory
cd ios

# Initialize Swift Package Manager (if not already done)
swift package init

# Resolve dependencies
swift package resolve
```

## Configuration Files

This workspace includes the following configuration files:

- `.vscode/extensions.json` - Recommended extensions
- `.vscode/settings.json` - Workspace-specific settings
- `.vscode/tasks.json` - Build and development tasks
- `.vscode/launch.json` - Debug configurations

## Available Tasks

Use `Cmd+Shift+P` and type "Tasks: Run Task" to access these tasks:

### Build Tasks
- **Build iOS Project** - Build the iOS app for simulator
- **Clean iOS Build** - Clean build artifacts
- **Install iOS Dependencies** - Install CocoaPods dependencies
- **Update iOS Dependencies** - Update CocoaPods dependencies

### Development Tasks
- **Run iOS Simulator** - Launch iOS Simulator
- **Swift Package Manager: Resolve** - Resolve SPM dependencies
- **Swift Package Manager: Update** - Update SPM dependencies

### Code Quality Tasks
- **Format Swift Code** - Format Swift files using swift-format
- **Lint Swift Code** - Lint Swift files using swift-format

## Debug Configurations

Use `F5` or the Debug panel to access these configurations:

1. **Debug iOS App (Simulator)** - Debug on iOS Simulator
2. **Debug iOS App (Device)** - Debug on physical device
3. **Attach to iOS Process** - Attach to running iOS process
4. **Debug Swift Package** - Debug Swift Package Manager project

## Keyboard Shortcuts

### Essential Shortcuts
- `Cmd+Shift+P` - Command Palette
- `Cmd+P` - Quick Open
- `Cmd+Shift+F` - Search in Files
- `Cmd+Shift+X` - Extensions
- `F5` - Start Debugging
- `Cmd+Shift+D` - Debug Panel

### iOS Development Shortcuts
- `Cmd+Shift+P` → "Tasks: Run Task" → Select iOS task
- `Cmd+Shift+P` → "Debug: Select and Start Debugging" → Select iOS debug config

## Best Practices

### File Organization
- Keep iOS-specific files in an `ios/` directory
- Use `.gitignore` to exclude build artifacts
- Organize Swift files by feature or module

### Code Style
- Use Swift Format for consistent code formatting
- Follow Apple's Swift API Design Guidelines
- Use meaningful variable and function names

### Git Workflow
- Use GitLens for enhanced Git integration
- Create feature branches for new development
- Write descriptive commit messages

### Debugging
- Use breakpoints strategically
- Leverage LLDB commands in debug console
- Use iOS Simulator for quick testing

## Troubleshooting

### Common Issues

1. **Extension not working**
   - Restart Cursor
   - Check extension is properly installed
   - Verify file associations in settings

2. **Build errors**
   - Clean build folder
   - Check Xcode project settings
   - Verify dependencies are installed

3. **Debugger not connecting**
   - Ensure iOS Simulator is running
   - Check app is built for correct architecture
   - Verify debug configuration settings

### Getting Help

- Check extension documentation
- Review Xcode and Swift documentation
- Use Cursor's built-in help system
- Consult Apple Developer documentation

## Next Steps

1. Create your first iOS project
2. Set up version control with Git
3. Configure your development environment
4. Start building your iOS app!

## Resources

- [Swift Documentation](https://swift.org/documentation/)
- [iOS Developer Documentation](https://developer.apple.com/ios/)
- [Xcode Documentation](https://developer.apple.com/xcode/)
- [Swift Package Manager](https://swift.org/package-manager/)
- [CocoaPods Documentation](https://cocoapods.org/) 