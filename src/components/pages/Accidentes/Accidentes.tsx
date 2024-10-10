import { useEffect, useState } from "react";
import * as Tone from "tone";
import { arrayNotes } from "./utils";

const Accidentes = () => {
  const [isToneReady, setIsToneReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [gainNode] = useState<Tone.InputNode>(
    new Tone.Gain(0.1).toDestination()
  );

  const synthA = new Tone.FMSynth().connect(gainNode);
  const synthB = new Tone.FMSynth().connect(gainNode);
  const synthC = new Tone.FMSynth().connect(gainNode);

  const loopA = new Tone.Loop((time) => {
    const randomNote =
      arrayNotes[Math.floor(Math.random() * arrayNotes.length)];
    synthA.triggerAttackRelease(randomNote, "8n", time);
  }, "4n").start(0);

  const loopB = new Tone.Loop((time) => {
    const randomNote =
      arrayNotes[Math.floor(Math.random() * arrayNotes.length)];
    synthA.triggerAttackRelease(randomNote, "16n", time);
  }, "4n").start("8n");

  const loopC = new Tone.Loop((time) => {
    const randomNote =
      arrayNotes[Math.floor(Math.random() * arrayNotes.length)];
    synthA.triggerAttackRelease(randomNote, "4n", time);
  }, "4n").start("4n");

  const handleStart = async () => {
    await Tone.start();
    setIsToneReady(true);
    setIsPlaying(true);
    Tone.getTransport().start();
    Tone.getTransport().bpm.value = 120;

    setTimeout(() => {
      handleStop();
    }, 600000);
  };

  const handleStop = () => {
    Tone.getTransport().stop();
    Tone.getTransport().bpm.value = 120;
    setIsPlaying(false);
  };

  useEffect(() => {
    if (isToneReady) {
    }
  }, [isToneReady]);

  return (
    <div className="flex gap-3">
      <button onClick={handleStart}>Start Sound</button>
      <button onClick={handleStop} disabled={!isPlaying}>
        Stop Sound
      </button>
      <p>{isToneReady ? "Audio is ready!" : "Click to start audio."}</p>
    </div>
  );
};

export default Accidentes;
