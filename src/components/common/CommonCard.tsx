import styled from "styled-components";

interface CardProps {
  profilepic: string;
  Twitter: string;
  name:string;
  email:string;

}

const CommonCard: React.FC<CardProps> = ({ profilepic, Twitter,name,email }) => {
  const Container = styled.section`
    height: 192px;
    width: 262px;
    border: 1px solid #e6ecef;
    margin: 30px;
    padding: 30px;
    border-radius: 8px;
  `;

  // Create a Wrapper component that'll render a <section> tag with some styles
  const ProfileName = styled.h1`
    font-weight: 600;
    font-size: 18px;
    margin-top: 10px;
  `;

  const Details = styled.div`
    display: flex;
    margin-top: 10px;
    gap: 10px;
  `;

  const Text = styled.h4`
    font-size: 14px;
    color:#7A869F;
  `;
  const View = styled.div`
    display: flex;
    margin-top: 10px;
    gap: 10px;
  `;

  return (
    <Container>
      <img src={profilepic} />
      <ProfileName>{name}</ProfileName>
      <Details>
        <img src={Twitter} />
        <Text>{email}</Text>
      </Details>
      <View>
        <p className="text-[24px] font-medium">545</p>
        <p
          className="text-[#616D86] text-[24px]"
        >
          Followers
        </p>
      </View>
    </Container>
  );
};

export default CommonCard;
