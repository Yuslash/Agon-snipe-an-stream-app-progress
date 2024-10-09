
export default function Site() {
    return<>
        
        <div className="main-upload absolute flex justify-center items-center top-0 left-0 w-full h-full text-white px-4 md:px-16 py-8 md:py-20">
            <div className="upload-panel p-5 w-full h-full flex flex-col md:flex-row gap-4">
                {/* Left Section (Form) */}
                <div className="w-full md:w-1/2 h-full flex flex-col gap-2 py-10 px-4 md:px-16">
                    <span className="text-2xl md:text-3xl font-semibold">Let's Upload Your Monster Content! ✨</span>
                    <span className="text-xs md:text-sm font-normal">All fields are Required and Select both Images and Video to Upload</span>

                    <div className="all-input-field flex flex-col gap-4 mt-4">
                        {/* Title Input */}
                        <input
                            className="super-input-field w-full"
                            placeholder="Title"
                        />

                        {/* Description Textarea */}
                        <textarea
                            className="super-input-field h-[100px] md:h-[120px] w-full"
                            placeholder="Description"
                        />

                        {/* Game Selection */}
                        <h1 className="text-lg md:text-xl tracking-wide">Select Game</h1>
                        <select className="super-input-field">
                            <option value="">Select an option</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                            <option value="option4">Option 4</option>
                        </select>

                        {/* Image and Video Upload Section */}
                        <div className="flex flex-col md:flex-row gap-4 w-full h-full">
                            {/* Video Upload */}
                            <label className="flex-1 cursor-pointer">
                                <img className="w-full h-full object-contain" src="/upload/uploadblue.png" alt="Upload Blue" />
                                <input type="file" className="hidden" accept="video/*" />
                            </label>

                            {/* Image Upload */}
                            <label className="flex-1 cursor-pointer">
                                <img className="w-full h-full object-contain" src="/upload/uploadpurple.png" alt="Upload Purple" />
                                <input type="file" className="hidden" accept="image/*" />
                            </label>
                        </div>

                        {/* Upload Button */}
                        <button className="discord-button py-2 md:py-4 rounded-lg font-semibold text-lg md:text-xl mt-4">
                            Upload
                        </button>
                    </div>
                </div>

                {/* Right Section (Preview) */}
                <div className="w-full md:w-1/2 h-full bg-violet-500 rounded-xl flex justify-center items-center">
                    <span className="text-xl md:text-2xl font-semibold">PREVIEW</span>
                </div>
            </div>
        </div>

    </>
}