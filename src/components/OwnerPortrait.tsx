import owners480 from '../assets/team/helm-co-owners-480.webp';
import owners960 from '../assets/team/helm-co-owners-960.webp';
import owners1440 from '../assets/team/helm-co-owners-1440.webp';
import './OwnerPortrait.css';

export default function OwnerPortrait({sizes, className = ''}: {sizes: string; className?: string}) {
  return (
    <img
      className={`owner-portrait ${className}`.trim()}
      src={owners960}
      srcSet={`${owners480} 480w, ${owners960} 960w, ${owners1440} 1440w`}
      sizes={sizes}
      width="1440"
      height="1080"
      alt="Kelly and Dawid Kluszczynski, co-owners of Helm Security"
      loading="lazy"
      decoding="async"
    />
  );
}
