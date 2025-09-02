import { useState, useEffect } from "react";
import AppShell from "../components/organisms/AppShell.jsx";
import { getProfiles } from "../utils/api.js";
import Card from "../components/Card.jsx";

export default function Dashboard() {
  const [profiles, setProfiles] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleCardClick = () => {
    console.log("Card cliquée !");
  };

  const handleTagClick = (tag) => {
    console.log("Tag cliqué :", tag);
  };

  useEffect(() => {
    const loadProfiles = async () => {
      try {
        const lastProfiles = await getProfiles();
        setProfiles(lastProfiles.items);
      } catch (err) {
        console.log(err);
        setError("Failed to load profiles...");
      } finally {
        setLoading(false);
      }
    };
    loadProfiles();
  }, []);

  return (
    <AppShell>
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      {/* <pre className="bg-black border border-white/20 rounded-xl p-4 text-sm">
        {JSON.stringify(user, null, 2)}
      </pre> */}

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <p>Oops...There is nobody!</p>
      ) : (
        <div className="flex align-baseline">
          {profiles.map((profile, index) => (
            <div key={index}>
              <Card
                image="https://picsum.photos/400"
                title={profile.name}
                tags={profile.skills}
                onClick={handleCardClick}
                onTagClick={handleTagClick}
              />
            </div>
          ))}
        </div>
      )}
    </AppShell>
  );
}
