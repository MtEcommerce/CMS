import { ProductCard } from '@cms/theme';
import styled from 'styled-components';

const StyledPage = styled.div`
  .page {
  }
`;
export function Index() {
  return (
    <StyledPage>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              <span> Hello there, </span>
              Welcome BackPage 👋
            </h1>
          </div>
          <ProductCard />
        </div>
      </div>
    </StyledPage>
  );
}

export default Index;
