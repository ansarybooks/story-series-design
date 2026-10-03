// Print & Proofing Export Helpers

export function downloadOriginalImage(imagePath: string, filename: string) {
  const link = document.createElement('a');
  link.href = imagePath;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export async function exportWithPrintMarks(
  imageSrc: string,
  spreadTitle: string,
  includeCropMarks = true,
  includeGutter = true
): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = imageSrc;

    img.onload = () => {
      const bleed = 60; // 60px bleed area around the print
      const canvas = document.createElement('canvas');
      const w = img.naturalWidth || 1920;
      const h = img.naturalHeight || 1080;

      canvas.width = w + bleed * 2;
      canvas.height = h + bleed * 2;
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        reject(new Error('Canvas context not available'));
        return;
      }

      // Background paper color
      ctx.fillStyle = '#FAF6EE';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw image inside bleed
      ctx.drawImage(img, bleed, bleed, w, h);

      if (includeCropMarks) {
        ctx.strokeStyle = '#2F4B8A';
        ctx.lineWidth = 1.5;

        const markLen = 35;
        const markOffset = 10;

        // Top-Left crop marks
        ctx.beginPath();
        ctx.moveTo(bleed, bleed - markOffset);
        ctx.lineTo(bleed, bleed - markOffset - markLen);
        ctx.moveTo(bleed - markOffset, bleed);
        ctx.lineTo(bleed - markOffset - markLen, bleed);

        // Top-Right crop marks
        ctx.moveTo(bleed + w, bleed - markOffset);
        ctx.lineTo(bleed + w, bleed - markOffset - markLen);
        ctx.moveTo(bleed + w + markOffset, bleed);
        ctx.lineTo(bleed + w + markOffset + markLen, bleed);

        // Bottom-Left crop marks
        ctx.moveTo(bleed, bleed + h + markOffset);
        ctx.lineTo(bleed, bleed + h + markOffset + markLen);
        ctx.moveTo(bleed - markOffset, bleed + h);
        ctx.lineTo(bleed - markOffset - markLen, bleed + h);

        // Bottom-Right crop marks
        ctx.moveTo(bleed + w, bleed + h + markOffset);
        ctx.lineTo(bleed + w, bleed + h + markOffset + markLen);
        ctx.moveTo(bleed + w + markOffset, bleed + h);
        ctx.lineTo(bleed + w + markOffset + markLen, bleed + h);
        ctx.stroke();

        // Print spec header info
        ctx.fillStyle = '#2F4B8A';
        ctx.font = '14px sans-serif';
        ctx.fillText(`NOUR & ANAS - ${spreadTitle} | 300 DPI EQUIV | 4-COLOR PALETTE`, bleed, 30);
        ctx.fillText(`RIGHT-TO-LEFT SPREAD | 4% SPINE GUTTER SAFE`, bleed + w - 420, 30);
      }

      if (includeGutter) {
        // Spine center tick marks
        const centerX = bleed + w / 2;
        ctx.strokeStyle = '#F2A93B';
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.moveTo(centerX, bleed);
        ctx.lineTo(centerX, bleed + h);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      const dataUrl = canvas.toDataURL('image/jpeg', 0.95);
      resolve(dataUrl);
    };

    img.onerror = (err) => reject(err);
  });
}
