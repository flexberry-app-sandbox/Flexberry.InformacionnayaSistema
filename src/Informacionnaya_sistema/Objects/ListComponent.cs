﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Informacionnaya_sistema
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// List component.
    /// </summary>
    // *** Start programmer edit section *** (ListComponent CustomAttributes)

    // *** End programmer edit section *** (ListComponent CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ListComponentE", new string[] {
            "Name as \'Наименование\'",
            "Component as \'Соц.составляющая\'",
            "Component.Name as \'Name\'"}, Hidden=new string[] {
            "Name",
            "Component.Name"})]
    [MasterViewDefineAttribute("ListComponentE", "Component", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Name")]
    public class ListComponent : ICSSoft.STORMNET.DataObject
    {
        
        private string fName;
        
        private IIS.Informacionnaya_sistema.Component fComponent;
        
        private IIS.Informacionnaya_sistema.Support fSupport;
        
        // *** Start programmer edit section *** (ListComponent CustomMembers)

        // *** End programmer edit section *** (ListComponent CustomMembers)

        
        /// <summary>
        /// Name.
        /// </summary>
        // *** Start programmer edit section *** (ListComponent.Name CustomAttributes)

        // *** End programmer edit section *** (ListComponent.Name CustomAttributes)
        [StrLen(255)]
        public virtual string Name
        {
            get
            {
                // *** Start programmer edit section *** (ListComponent.Name Get start)

                // *** End programmer edit section *** (ListComponent.Name Get start)
                string result = this.fName;
                // *** Start programmer edit section *** (ListComponent.Name Get end)

                // *** End programmer edit section *** (ListComponent.Name Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ListComponent.Name Set start)

                // *** End programmer edit section *** (ListComponent.Name Set start)
                this.fName = value;
                // *** Start programmer edit section *** (ListComponent.Name Set end)

                // *** End programmer edit section *** (ListComponent.Name Set end)
            }
        }
        
        /// <summary>
        /// List component.
        /// </summary>
        // *** Start programmer edit section *** (ListComponent.Component CustomAttributes)

        // *** End programmer edit section *** (ListComponent.Component CustomAttributes)
        [NotNull()]
        public virtual IIS.Informacionnaya_sistema.Component Component
        {
            get
            {
                // *** Start programmer edit section *** (ListComponent.Component Get start)

                // *** End programmer edit section *** (ListComponent.Component Get start)
                IIS.Informacionnaya_sistema.Component result = this.fComponent;
                // *** Start programmer edit section *** (ListComponent.Component Get end)

                // *** End programmer edit section *** (ListComponent.Component Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ListComponent.Component Set start)

                // *** End programmer edit section *** (ListComponent.Component Set start)
                this.fComponent = value;
                // *** Start programmer edit section *** (ListComponent.Component Set end)

                // *** End programmer edit section *** (ListComponent.Component Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Informacionnaya_sistema.Support.
        /// </summary>
        // *** Start programmer edit section *** (ListComponent.Support CustomAttributes)

        // *** End programmer edit section *** (ListComponent.Support CustomAttributes)
        [Agregator()]
        [NotNull()]
        public virtual IIS.Informacionnaya_sistema.Support Support
        {
            get
            {
                // *** Start programmer edit section *** (ListComponent.Support Get start)

                // *** End programmer edit section *** (ListComponent.Support Get start)
                IIS.Informacionnaya_sistema.Support result = this.fSupport;
                // *** Start programmer edit section *** (ListComponent.Support Get end)

                // *** End programmer edit section *** (ListComponent.Support Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ListComponent.Support Set start)

                // *** End programmer edit section *** (ListComponent.Support Set start)
                this.fSupport = value;
                // *** Start programmer edit section *** (ListComponent.Support Set end)

                // *** End programmer edit section *** (ListComponent.Support Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ListComponentE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ListComponentE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ListComponentE", typeof(IIS.Informacionnaya_sistema.ListComponent));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of ListComponent.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfListComponent CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfListComponent CustomAttributes)
    public class DetailArrayOfListComponent : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Informacionnaya_sistema.DetailArrayOfListComponent members)

        // *** End programmer edit section *** (IIS.Informacionnaya_sistema.DetailArrayOfListComponent members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type ListComponent by index.
        /// </summary>
        /// <summary>
        /// Adds object with type ListComponent.
        /// </summary>
        public DetailArrayOfListComponent(IIS.Informacionnaya_sistema.Support fSupport) : 
                base(typeof(ListComponent), ((ICSSoft.STORMNET.DataObject)(fSupport)))
        {
        }
        
        public IIS.Informacionnaya_sistema.ListComponent this[int index]
        {
            get
            {
                return ((IIS.Informacionnaya_sistema.ListComponent)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Informacionnaya_sistema.ListComponent dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
