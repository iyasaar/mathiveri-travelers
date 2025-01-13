const Map = () => {
  return (
    <div className="min-h-[50vh] flex mx-auto w-full justify-center mb-20">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1989.5724277641752!2d72.7446801890398!3d4.191897423980446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b40ff855d053a5b%3A0x44d6cd778ddc7015!2sMathiveri!5e0!3m2!1sen!2smv!4v1736792238357!5m2!1sen!2smv"
        className="w-[80%] min-h-[80%] "
        style={{ border: 0, borderRadius: "20px" }}
        loading="lazy"
      ></iframe>
    </div>
  );
};
export default Map;
