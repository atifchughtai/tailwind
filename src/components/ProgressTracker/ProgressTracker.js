import { ProgressHeader } from './ProgressTracker.styled';
const ProgressTracker = () => (
  <ProgressHeader class="progress-header" aria-label="action progress">
    <p isCompleted>
      <span className="step">1</span>
      <strong>Some label</strong>
    </p>
    <p isCompleted>
      <span className="step">2</span>
      <strong>Some label</strong>
    </p>
    <p>
      <span className="step">3</span>
      <strong>Some label</strong>
    </p>
    <p>
      <span className="step">4</span>
      <strong>Some label</strong>
    </p>
    <p>
      <span className="step">5</span>
      <strong>Some label</strong>
    </p>
  </ProgressHeader>
);

export default ProgressTracker;
