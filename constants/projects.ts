type Project = {
  title: string;
  slug: string;
  tagline: string;
  overview: string;
  features?: string[];
  techStack?: string[];
  challenges?: string[];
  learnings?: string[];
  feedback: boolean;
  links: {
    github: string;
    live?: string;
  };
};

export const projects: Project[] = [
  {
    title: "Agri Hub | End-to-End Agriculture Management Platform",
    slug: "agri-hub",
    tagline:
      "An AI-powered crop and soil management system providing smart farming solutions for modern agriculture.",
    overview:
      "Agri Hub is a comprehensive agricultural platform that leverages artificial intelligence and machine learning to provide smart farming solutions. It offers crop recommendations, soil optimization, disease detection, and weather-aware insights — all in one platform designed to empower modern farmers with data-driven decisions.",
    features: [
      "AI-powered crop recommendations based on soil parameters (N, P, K, pH, rainfall) with 99.55% accuracy using a retrained Random Forest model.",
      "Intelligent fertilizer suggestions based on soil nutrient analysis with NPK deficiency detection for 22 supported crops.",
      "Computer vision-based plant disease identification covering 38 plant diseases using deep learning.",
      "7-day weather forecast with smart farming advice, activity planning, and risk alerts for extreme conditions.",
      "Crop comparison dashboard with profit analysis, ROI calculations, market trends, and regional suitability.",
      "Google Gemini-powered AI agriculture chatbot for real-time expert farming assistance.",
    ],
    techStack: [
      "Python",
      "Flask",
      "Scikit-Learn",
      "PyTorch",
      "Random Forest",
      "CNN",
      "Google Gemini API",
      "OpenWeatherMap API",
      "Bootstrap 5",
      "JavaScript",
    ],
    challenges: [
      "Training and optimizing machine learning models for high accuracy crop recommendations.",
      "Integrating multiple AI models (Random Forest, CNN) into a single cohesive platform.",
      "Handling real-time weather data and translating it into actionable farming insights.",
      "Building a responsive and intuitive UI for users with varying technical backgrounds.",
    ],
    learnings: [
      "Deepened expertise in machine learning model training and optimization with Scikit-Learn.",
      "Gained hands-on experience with deep learning using PyTorch for image classification.",
      "Improved understanding of API integrations including Google Gemini and OpenWeatherMap.",
      "Enhanced ability to build full-stack AI-powered web applications with Flask.",
    ],
    feedback: true,
    links: {
      github: "https://github.com/dhanushdv13/end-to-end-AGRICULTURE-HUB",
    },
  },

  {
    title: "Movie Recommender | ML-Powered Movie Suggestions",
    slug: "movie-recommender",
    tagline:
      "A content-based movie recommendation system that suggests similar movies using machine learning and the TMDB API.",
    overview:
      "Movie Recommender is a content-based filtering system that analyzes movie genres, keywords, cast, and overviews to recommend the top 5 most similar movies to a user's selection. It dynamically fetches movie posters via the TMDB API and presents recommendations through an interactive Streamlit web interface.",
    features: [
      "Content-based filtering using cosine similarity to recommend top 5 similar movies.",
      "Analyzes movie genres, keywords, cast, and overview for accurate similarity matching.",
      "Dynamic movie poster fetching using the TMDB API.",
      "Interactive and easy-to-use web interface built with Streamlit.",
      "Efficient model storage using Pickle for fast recommendations.",
    ],
    techStack: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-Learn",
      "NLTK",
      "Streamlit",
      "TMDB API",
      "Pickle",
    ],
    challenges: [
      "Processing and cleaning large movie datasets for accurate feature extraction.",
      "Implementing effective text preprocessing with NLTK for better similarity results.",
      "Integrating the TMDB API for dynamic and real-time poster fetching.",
      "Optimizing the recommendation engine for fast and accurate results.",
    ],
    learnings: [
      "Gained strong understanding of content-based filtering and cosine similarity.",
      "Improved skills in NLP and text preprocessing using NLTK.",
      "Learned to build interactive ML-powered web apps using Streamlit.",
      "Enhanced experience in working with external APIs for dynamic data fetching.",
    ],
    feedback: true,
    links: {
      github: "https://github.com/dhanushdv13/movie-recommender-ML-project-",
    },
  },

  {
    title: "Simple ChatGPT | Multi-Modal AI Assistant",
    slug: "simple-chatgpt",
    tagline:
      "A multi-modal AI assistant supporting text queries, image analysis, and conversational Q&A powered by Google Gemini.",
    overview:
      "Simple ChatGPT is a multi-modal AI assistant built with Streamlit and Google Gemini API. It supports three interaction modes: text-based queries, image-based analysis where users can upload images and ask questions about them, and a conversational Q&A chatbot with follow-up question support — all in a clean and interactive web interface.",
    features: [
      "Text-based query interface for intelligent AI-generated responses similar to ChatGPT.",
      "Image upload and analysis — users can ask questions about uploaded images using Gemini's vision capabilities.",
      "Conversational Q&A chatbot with follow-up question support for continuous interaction.",
      "Built with Streamlit for a clean, interactive, and easy-to-use web interface.",
      "Environment variable management with python-dotenv for secure API key handling.",
    ],
    techStack: [
      "Python",
      "Google Gemini API",
      "Streamlit",
      "Pillow",
      "python-dotenv",
      "Requests",
    ],
    challenges: [
      "Integrating multiple interaction modes (text, image, chat) into a single seamless application.",
      "Handling image inputs and passing them correctly to the Gemini API for analysis.",
      "Managing conversation history for a smooth and continuous chatbot experience.",
      "Securing API keys and environment variables across different deployment setups.",
    ],
    learnings: [
      "Gained hands-on experience with Google Gemini API for multi-modal AI interactions.",
      "Improved ability to build interactive AI-powered apps using Streamlit.",
      "Learned effective image processing techniques using Pillow for AI input preparation.",
      "Enhanced understanding of environment management and secure API key handling.",
    ],
    feedback: true,
    links: {
      github: "https://github.com/dhanushdv13/simple-Chat-GPT",
    },
  },
];