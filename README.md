
# Portfolio Generator

## Description
The Portfolio Generator is an open-source project designed to create and customize personal portfolio websites without requiring a backend. The application leverages React.js and allows users to define their details and preferences directly in two JSON files:

1. **data.json**: Contains user-specific details such as name, title, contact information, skills, experience, projects, and education.
2. **template.json**: Manages theme-related settings like colors, typography, and layout preferences.

By simply editing these JSON files, users can modify their portfolio content and style effortlessly, with changes reflected dynamically on the website's UI.

## Features
- **No Backend Required**: Customizations are made directly in the JSON files, simplifying deployment and maintenance.
- **Dynamic Content Management**: Updates to `data.json` automatically render on the UI.
- **Customizable Themes**: Personalize colors, fonts, and layouts via `template.json`.
- **User-Friendly Setup**: Quick and straightforward configuration for users of all levels.
- **Local Development**: The project runs locally on port `5173` using `npm run dev`.
- **Open Source**: Available for contributions and modifications on GitHub.

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (Node Package Manager)

### Installation
 clone https://github.com/your-repo-name/portfolio-generator.git
   ```
1. Navigate to the project directory:
   ```bash
   cd portfolio-generator
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Project
Start the development server:
```bash
npm run dev
```
Access the portfolio at [http://localhost:5173](http://localhost:5173).

## File Structure
```
portfolio-generator/
├── src/
│   ├── data/
│   │   ├── data.json       # User details
│   │   ├── template.json   # Theme settings
│   ├── components/         # Reusable React components
│   ├── pages/              # Page components
├── public/                 # Static files
├── package.json            # Project metadata and dependencies
└── README.md               # Project documentation
```

## How to Customize

### Modify User Details
Edit the `data.json` file under the `src/data/` directory to include your details, such as:
- Name, title, and bio
- Contact information
- Skills, experience, and projects

### Change the Theme
Edit the `template.json` file to customize:
- Primary and accent colors
- Typography (fonts, sizes, weights)
- Layout and spacing preferences

### Example Edits
**data.json**:
```json
{
  "profile": {
    "name": "John Doe",
    "title": "Frontend Developer",
    "bio": "Building beautiful, functional user experiences."
  }
}
```

**template.json**:
```json
{
  "theme": {
    "colors": {
      "primary": "#3498db",
      "background": "#2c3e50"
    }
  }
}
```

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request for any feature additions or improvements.

## License
This project is licensed under the MIT License.

## Contact
For any queries or support, reach out via:
- **Email**: himanshudoye24@gmail.com
- **GitHub**: [HimanshuDoye10](https://github.com/HimanshuDoye10)
