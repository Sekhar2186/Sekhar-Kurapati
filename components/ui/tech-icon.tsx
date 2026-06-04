import {
  SiPython, SiTypescript, SiJavascript, SiCplusplus,
  SiReact, SiNextdotjs, SiTailwindcss, SiFramer,
  SiNodedotjs, SiFastapi, SiDjango, SiGraphql,
  SiPytorch, SiTensorflow, SiScikitlearn, SiOpencv,
  SiPandas, SiNumpy, SiJupyter, SiHuggingface,
  SiGit, SiDocker, SiPostgresql, SiMongodb, SiRedis,
  SiPnpm, SiGithubactions, SiTurborepo, SiLinux, SiVercel,
  SiLangchain, SiPrisma, SiFirebase, SiSupabase,
  SiHtml5, SiCss, SiGithub,
  SiKaggle, SiOpenai, SiStreamlit, SiGooglecolab,
  SiPostman, SiFigma, SiNotion, SiFlask, SiOllama,
} from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { VscTerminal } from "react-icons/vsc";
import { BiBrain } from "react-icons/bi";

type IconProps = {
  className?: string;
};

/** Returns the correct branded icon for a given technology name. */
export function TechIcon({ name, className = "w-7 h-7" }: IconProps & { name: string }) {
  const n = name.toLowerCase().trim();
  const cls = className;

  switch (n) {
    // Languages
    case "python":         return <SiPython        className={cls} style={{ color: "#3776AB" }} />;
    case "typescript":     return <SiTypescript     className={cls} style={{ color: "#3178C6" }} />;
    case "javascript":     return <SiJavascript     className={cls} style={{ color: "#F7DF1E" }} />;
    case "c++":            return <SiCplusplus      className={cls} style={{ color: "#00599C" }} />;
    case "sql":            return <TbSql            className={cls} style={{ color: "#4479A1" }} />;
    case "html & css":     return <SiHtml5          className={cls} style={{ color: "#E34F26" }} />;

    // Frontend
    case "react":          return <SiReact          className={cls} style={{ color: "#61DAFB" }} />;
    case "next.js":        return <SiNextdotjs      className={cls} />;
    case "tailwind css":
    case "tailwindcss":    return <SiTailwindcss    className={cls} style={{ color: "#06B6D4" }} />;
    case "framer motion":  return <SiFramer         className={cls} style={{ color: "#0055FF" }} />;
    case "html":           return <SiHtml5          className={cls} style={{ color: "#E34F26" }} />;
    case "css":            return <SiCss            className={cls} style={{ color: "#1572B6" }} />;

    // Backend
    case "node.js":        return <SiNodedotjs      className={cls} style={{ color: "#5FA04E" }} />;
    case "fastapi":        return <SiFastapi        className={cls} style={{ color: "#009688" }} />;
    case "django":         return <SiDjango         className={cls} style={{ color: "#0C4B33" }} />;
    case "rest apis":      return <VscTerminal      className={cls} style={{ color: "#A855F7" }} />;
    case "graphql":        return <SiGraphql        className={cls} style={{ color: "#E10098" }} />;
    case "prisma":         return <SiPrisma         className={cls} style={{ color: "#2D3748" }} />;

    // AI / ML
    case "pytorch":        return <SiPytorch        className={cls} style={{ color: "#EE4C2C" }} />;
    case "tensorflow":     return <SiTensorflow     className={cls} style={{ color: "#FF6F00" }} />;
    case "scikit-learn":   return <SiScikitlearn    className={cls} style={{ color: "#F7931E" }} />;
    case "langchain":      return <SiLangchain      className={cls} style={{ color: "#1C3C3C" }} />;
    case "langgraph":      return <BiBrain          className={cls} style={{ color: "#7C3AED" }} />;
    case "opencv":         return <SiOpencv         className={cls} style={{ color: "#5C3EE8" }} />;
    case "pandas":         return <SiPandas         className={cls} style={{ color: "#150458" }} />;
    case "numpy":          return <SiNumpy          className={cls} style={{ color: "#013243" }} />;
    case "jupyter":        return <SiJupyter        className={cls} style={{ color: "#F37626" }} />;
    case "hugging face":   return <SiHuggingface    className={cls} style={{ color: "#FFD21E" }} />;

    // Tools & DevOps
    case "git":            return <SiGit            className={cls} style={{ color: "#F05032" }} />;
    case "github":         return <SiGithub         className={cls} />;
    case "docker":         return <SiDocker         className={cls} style={{ color: "#2496ED" }} />;
    case "postgresql":     return <SiPostgresql     className={cls} style={{ color: "#4169E1" }} />;
    case "mongodb":        return <SiMongodb        className={cls} style={{ color: "#47A248" }} />;
    case "redis":          return <SiRedis          className={cls} style={{ color: "#DC382D" }} />;
    case "pnpm":           return <SiPnpm           className={cls} style={{ color: "#F69220" }} />;
    case "ci/cd":          return <SiGithubactions  className={cls} style={{ color: "#2088FF" }} />;
    case "turbo":
    case "turborepo":      return <SiTurborepo      className={cls} style={{ color: "#EF4444" }} />;
    case "linux":          return <SiLinux          className={cls} style={{ color: "#FCC624" }} />;
    case "vercel":         return <SiVercel         className={cls} />;
    case "firebase":       return <SiFirebase       className={cls} style={{ color: "#FFCA28" }} />;
    case "supabase":       return <SiSupabase       className={cls} style={{ color: "#3ECF8E" }} />;

    // AI Tools & Platforms
    case "kaggle":         return <SiKaggle         className={cls} style={{ color: "#20BEFF" }} />;
    case "openai":         return <SiOpenai         className={cls} />;
    case "streamlit":      return <SiStreamlit      className={cls} style={{ color: "#FF4B4B" }} />;
    case "google colab":   return <SiGooglecolab    className={cls} style={{ color: "#F9AB00" }} />;
    case "ollama":         return <SiOllama         className={cls} />;

    // Productivity & Design
    case "postman":        return <SiPostman        className={cls} style={{ color: "#FF6C37" }} />;
    case "figma":          return <SiFigma          className={cls} style={{ color: "#F24E1E" }} />;
    case "notion":         return <SiNotion         className={cls} />;
    case "flask":          return <SiFlask          className={cls} />;

    default:
      return (
        <span className="text-xl font-bold text-neutral-400 dark:text-neutral-600">
          {name.slice(0, 2).toUpperCase()}
        </span>
      );
  }
}
