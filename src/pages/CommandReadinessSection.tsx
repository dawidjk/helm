import {Band} from '../components/Site';
import {commandReadiness} from './commandReadiness';
import './CommandReadinessSection.css';

export function CommandReadinessSection() {
  return (
    <Band>
      <section className="command-readiness" id="soc-2-readiness" aria-labelledby="soc-2-readiness-title">
        <div className="band-head observe">
          <h2 id="soc-2-readiness-title">{commandReadiness.title}</h2>
          <p>{commandReadiness.status}</p>
        </div>
        <div className="command-readiness-copy observe">
          <p>{commandReadiness.description}</p>
          <p>{commandReadiness.boundary}</p>
        </div>
      </section>
    </Band>
  );
}
