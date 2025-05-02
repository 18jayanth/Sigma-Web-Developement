export default function Child({onUpdateMessage}) {
    return (
      <button onClick={() => onUpdateMessage("New Message!")}>
        Update Message
      </button>
    );
  }