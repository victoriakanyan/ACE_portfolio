import MorphingBlob from "./MorphingBlob";

export default function FloatingSVGBlobs() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {/* Blob 1 */}
      <div className="absolute top-[5%] left-[10%] animate-floatxy-1">
        <MorphingBlob color1="#8860D0" color2="#C1C8E4" size={600} />
      </div>

      {/* Blob 2 */}
      <div className="absolute top-[60%] right-[5%] animate-floatxy-2">
        <MorphingBlob color1="#84CEEB" color2="#5AB9EA" size={500} />
      </div>

      {/* Blob 3 */}
      <div className="absolute top-[45%] left-[50%] -translate-x-1/2 -translate-y-1/2 animate-floatxy-3">
        <MorphingBlob color1="#5AB9EA" color2="#C1C8E4" size={650} />
      </div>
    </div>
  );
}
