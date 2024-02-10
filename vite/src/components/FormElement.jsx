export default({type, Label, placeholder, fieldRef, hasError}) =>{
    const classes = 'form-control w-full px-3 py-1.5 text-gray-700 rounded border border-solid border-gray-300 focus:border-[#003861] focuses:outline-none';
        return(
            <div className="form-group mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">{Label}</label>"
                {type === 'textarea' ? (
                    <textarea className={classes} rows="3" placeholder={placeholder} {...fieldRef} />
                ) : (
                    <input className={classes} type={type} placeholder={placeholder} {...fieldRef} />
                )}
                {hasError && <p className="text-red-500 text-xs italic">{`${Label} is required`}</p>}
            </div>
        );
}; 