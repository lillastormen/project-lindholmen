"use client";
import React, { useState, useEffect } from "react";
import { supabase } from "@/supabaseClient";
import { FaRegThumbsUp } from "react-icons/fa6";

export default function CommentsSection({ tableName, story }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({ username: "", comment: "" });
  const [loading, setLoading] = useState(true);
  const [animatingCommentId, setAnimatingCommentId] = useState(null);

  useEffect(() => {
    fetchComments();
  }, [tableName]);

  const fetchComments = async () => {
    try {
      const { data, error } = await supabase.from(tableName).select("*");
      if (error) {
        console.error("Error fetching comments:", error);
      } else {
        setComments(data);
      }
    } catch (err) {
      console.error("Unexpected error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { comment, username } = newComment || { comment: "", username: "" };

    const finalUsername = username || "Anonym";

    if (comment) {
      try {
        const { data, error } = await supabase
          .from(tableName)
          .insert([{ comment, username: finalUsername }]);

        if (error) {
          console.error("Error sending comment:", error);
        } else {
          setComments((prevComments) => [
            ...prevComments,
            ...(Array.isArray(data) ? data : [data]),
          ]);
          setNewComment({ username: "", comment: "" });
          fetchComments();
        }
      } catch (err) {
        console.error("Unexpected error:", err);
      }
    } else {
      console.error("Comment is required");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewComment((prev) => ({ ...prev, [name]: value }));
  };

  const handleLike = async (commentId, currentLikes) => {
    setAnimatingCommentId(commentId);
    const { data, error } = await supabase
      .from(tableName)
      .update({ likes: currentLikes + 1 })
      .eq("id", commentId);

    if (error) {
      console.error("Error updating likes:", error);
    } else {
      fetchComments();
      // Optionally, you can refetch comments or update the state to reflect the new likes count
    }
    setTimeout(() => setAnimatingCommentId(null), 500);
  };

  return (
    <div className="flex flex-col justify-center items-center px-5 my-4 gap-2">
      <h3 className="text-black text-lg">{story}</h3>
      <form onSubmit={handleSubmit} className="w-full">
        <div>
          <textarea
            className="w-full h-[200px] bg-[#FAE6D3] rounded-[10px] p-2"
            id="text"
            name="comment"
            placeholder="Vilken är din berättelse?"
            value={newComment.comment}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex gap-4 mt-2">
          <div>
            <input
              className="w-full p-2 mb-2 border rounded-[10px] bg-[#FAE6D3]"
              type="text"
              name="username"
              value={newComment.username}
              onChange={handleChange}
              placeholder="Namn"
              autoComplete="off"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="w-[154px] h-[42px] rounded-[10px] bg-black text-white"
            >
              Skicka
            </button>
          </div>
        </div>
      </form>
      <div className="w-full flex flex-col gap-2 mt-4 overflow-scroll mb-4">
        {loading ? (
          <p>Laddar kommentarer...</p>
        ) : comments.length > 0 ? (
          comments.map((comment) => {
            if (!comment) return null; // Skip null or undefined comments

            const {
              id,
              username = "Anonym",
              comment: commentText,
              likes = 0,
            } = comment;

            return (
              <div className="bg-[#ffdcba] rounded-[10px] p-2" key={comment.id}>
                <div className="flex justify-between pb-2">
                  <p>
                    <strong className="underline text-lg">{username}</strong>
                  </p>
                  <div className="flex ">
                    <span className="flex items-end">{likes}</span>
                    <button
                      className="ml-2 flex items-center"
                      onClick={() => handleLike(id, likes)}
                      disabled={loading}
                    >
                      <FaRegThumbsUp
                        size="24px"
                        className={`${
                          animatingCommentId === id ? "animate-bounce" : ""
                        }`}
                      />
                    </button>
                  </div>
                </div>
                <p>{commentText}</p>
              </div>
            );
          })
        ) : (
          <p>Inga kommentarer än.</p>
        )}
      </div>
    </div>
  );
}
