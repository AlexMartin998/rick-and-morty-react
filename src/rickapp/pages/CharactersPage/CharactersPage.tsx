import { CharacterList } from './components';

export interface CharactersPageProps {}

const CharactersPage: React.FC<CharactersPageProps> = () => {
  return (
    <div>
      <CharacterList />
    </div>
  );
};

export default CharactersPage;
