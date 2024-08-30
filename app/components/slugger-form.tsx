"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import slugify from "slugify";

const SluggerForm = () => {
    const [text, setText] = useState("");
    const [slug, setSlug] = useState("");
    const [separator, setSeparator] = useState("-");
    const [removeStopWords, setRemoveStopWords] = useState(false);
    const [removeNumbers, setRemoveNumbers] = useState(false);

    const handleSluggers = () => {
        let processedText = text;

        if (removeStopWords) {
            const stopWords = ["the", "a", "an", "and", "but", "or"];
            processedText = processedText
                .split(" ")
                .filter((word) => !stopWords.includes(word.toLowerCase()))
                .join(" ");
        }

        if (removeNumbers) {
            processedText = processedText.replace(/[0-9]/g, "");
        }

        const result = slugify(processedText, {
            lower: true,
            replacement: separator,
        });

        setSlug(result);
    };

    const handleClear = () => {
        setText("");
        setSlug("");
    };

    const handleReset = () => {
        setText("");
        setSlug("");
        setSeparator("-");
        setRemoveStopWords(false);
        setRemoveNumbers(false);
    };
    const textCopyToClipboard = () => {
        navigator.clipboard.writeText(text);
        toast.success("Text copied to clipboard!");
    };
    const slugCopyToClipboard = () => {
        navigator.clipboard.writeText(slug);
        toast.success("Slug copied to clipboard!");
    };

    return (
        <div className="p-6 bg-gray-100 rounded-md shadow-md">
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                    INPUT STRING: (Article title, tutorial title or any web page
                    title)
                </label>
                <div className="flex mt-1">
                    <input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    <button
                        onClick={textCopyToClipboard}
                        className="ml-2 px-4 py-2 bg-gray-700 text-white rounded-md"
                    >
                        COPY
                    </button>
                </div>
            </div>

            <div className="mb-4 flex space-x-4">
                <button
                    onClick={() => setSeparator("-")}
                    className={`px-4 py-2 rounded-md ${
                        separator === "-"
                            ? "bg-blue-600 text-white"
                            : "bg-white border border-gray-300 text-gray-700"
                    }`}
                >
                    Separate with dash (-)
                </button>
                <button
                    onClick={() => setSeparator("_")}
                    className={`px-4 py-2 rounded-md ${
                        separator === "_"
                            ? "bg-blue-600 text-white"
                            : "bg-white border border-gray-300 text-gray-700"
                    }`}
                >
                    Separate with underscore (_)
                </button>
                <label className="inline-flex items-center">
                    <input
                        type="checkbox"
                        checked={removeStopWords}
                        onChange={() => setRemoveStopWords(!removeStopWords)}
                        className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-gray-700">
                        Remove stop words
                    </span>
                </label>
                <label className="inline-flex items-center">
                    <input
                        type="checkbox"
                        checked={removeNumbers}
                        onChange={() => setRemoveNumbers(!removeNumbers)}
                        className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-gray-700">Remove numbers</span>
                </label>
            </div>

            <div className="mb-4 flex space-x-4">
                <button
                    onClick={handleSluggers}
                    className="px-4 py-2 bg-gray-700 text-white rounded-md"
                >
                    GENERATE SLUG
                </button>
                <button
                    onClick={handleClear}
                    className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md"
                >
                    CLEAR
                </button>
                <button
                    onClick={handleReset}
                    className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md"
                >
                    RESET
                </button>
            </div>

            {slug && (
                <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700">
                        OUTPUT: (Clean URL slug)
                    </label>
                    <div className="flex mt-1">
                        <input
                            type="text"
                            value={slug}
                            readOnly
                            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        <button
                            onClick={slugCopyToClipboard}
                            className="ml-2 px-4 py-2 bg-gray-700 text-white rounded-md"
                        >
                            COPY
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SluggerForm;
