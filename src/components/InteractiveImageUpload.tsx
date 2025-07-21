import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Upload, 
  Image as ImageIcon, 
  X, 
  Download,
  RotateCw,
  ZoomIn,
  ZoomOut
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const InteractiveImageUpload = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [imageTransform, setImageTransform] = useState({ 
    scale: 1, 
    rotation: 0 
  });
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      toast({
        title: "Invalid file type",
        description: "Please upload an image file.",
        variant: "destructive",
      });
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Please upload an image smaller than 5MB.",
        variant: "destructive",
      });
      return;
    }

    setIsUploading(true);
    
    const reader = new FileReader();
    reader.onload = (e) => {
      setUploadedImage(e.target?.result as string);
      setIsUploading(false);
      toast({
        title: "Image uploaded successfully",
        description: "You can now interact with your image.",
      });
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveImage = () => {
    setUploadedImage(null);
    setImageTransform({ scale: 1, rotation: 0 });
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleZoomIn = () => {
    setImageTransform(prev => ({ 
      ...prev, 
      scale: Math.min(prev.scale + 0.2, 3) 
    }));
  };

  const handleZoomOut = () => {
    setImageTransform(prev => ({ 
      ...prev, 
      scale: Math.max(prev.scale - 0.2, 0.5) 
    }));
  };

  const handleRotate = () => {
    setImageTransform(prev => ({ 
      ...prev, 
      rotation: (prev.rotation + 90) % 360 
    }));
  };

  const handleDownload = () => {
    if (!uploadedImage) return;
    
    const link = document.createElement('a');
    link.download = 'processed-image.png';
    link.href = uploadedImage;
    link.click();
  };

  return (
    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-elegant">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h3 className="text-white font-semibold text-lg">Interactive Image Studio</h3>
          <Badge className="bg-accent text-accent-foreground">
            ● Upload & Edit
          </Badge>
        </div>

        {/* Upload Area or Image Display */}
        {!uploadedImage ? (
          <div className="border-2 border-dashed border-white/30 rounded-lg p-8 text-center hover:border-white/50 transition-colors">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto">
                <ImageIcon className="h-8 w-8 text-white/80" />
              </div>
              <div>
                <p className="text-white font-medium">Upload your image</p>
                <p className="text-white/70 text-sm">PNG, JPG up to 5MB</p>
              </div>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              <Button 
                onClick={() => fileInputRef.current?.click()}
                disabled={isUploading}
                className="bg-accent hover:bg-accent/90"
              >
                <Upload className="h-4 w-4 mr-2" />
                {isUploading ? 'Uploading...' : 'Choose Image'}
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Image Display */}
            <div className="relative bg-white/5 rounded-lg p-4 overflow-hidden">
              <img
                src={uploadedImage}
                alt="Uploaded content"
                className="max-w-full h-auto mx-auto rounded-lg transition-transform duration-300 ease-in-out"
                style={{
                  transform: `scale(${imageTransform.scale}) rotate(${imageTransform.rotation}deg)`,
                  maxHeight: '300px'
                }}
              />
            </div>

            {/* Image Controls */}
            <div className="flex items-center justify-between bg-white/5 rounded-lg p-4">
              <div className="flex items-center space-x-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={handleZoomOut}
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  <ZoomOut className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={handleZoomIn}
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  <ZoomIn className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={handleRotate}
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  <RotateCw className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="flex items-center space-x-2">
                <Button
                  size="sm"
                  onClick={handleDownload}
                  className="bg-accent hover:bg-accent/90"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={handleRemoveImage}
                  className="border-red-500/50 text-red-400 hover:bg-red-500/10"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Image Info */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-lg p-3">
                <p className="text-white/80 text-sm">Scale</p>
                <p className="text-white font-medium">{Math.round(imageTransform.scale * 100)}%</p>
              </div>
              <div className="bg-white/5 rounded-lg p-3">
                <p className="text-white/80 text-sm">Rotation</p>
                <p className="text-white font-medium">{imageTransform.rotation}°</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InteractiveImageUpload;